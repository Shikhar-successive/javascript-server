import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddDialog, EditDialog, DeleteDialog } from './Componants';
import trainees from './Data/trainee';
import { Table } from '../../components';
import { getFormattedDate } from '../../libs/utils/getFormattedDate';
import { SnackbarContext } from '../../contexts/SnackBarProvider/SnackBarProvider';
import { callApi } from '../../libs/utils';

const asend = 'asc';
const dsend = 'desc';
class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      orderBy: '',
      order: asend,
      page: 0,
      edit: false,
      deleteDialog: false,
      traineeInfo: {},
      spinner: false,
    };
  }

  onOpen = () => {
    this.setState({ open: true });
    console.log(localStorage.getItem('token'));
  };

  onCloseEvent = () => {
    this.setState({ open: false });
  };

  handleSubmit = async (openSnackbar, state) => {
    const userInfo = {
      name: state.name,
      email: state.email,
      password: state.password,
      role: 'Trainee',
      createdBy: 'Admin',
    };
    this.setState({
      spinner: true,
    });
    const user = await callApi(userInfo, 'post', '/trainee/create');
    if (user.data) {
      console.log(user);
      openSnackbar('Trainee Creadted Successfully', 'success');
      this.onCloseEvent();
    } else {
      openSnackbar('Trainee Not Created', 'error');
    }

    // if ()
    // openSnackbar('Trainee Created Successfully', 'success');
    // this.onCloseEvent();
  }

  editDialogOpen = (item) => {
    this.selectedItem = item;
    this.setState({ edit: true, traineeInfo: item });
  };

  editDialogClose = () => {
    this.selectedIem = null;
    this.setState({ edit: false });
  };

  handleEdit = (openSnackbar, item) => {
    openSnackbar('Trainee Updated Successfully', 'success');
    console.log(item, '=========');
    this.editDialogClose();
  }

  deleteDialogOpen = (item) => {
    this.selectedIem = item;
    this.setState({ deleteDialog: true, traineeInfo: item });
  };

  deleteDialogClose = () => {
    this.selectedIem = null;
    this.setState({ deleteDialog: false });
  };

  handleDelete = (openSnackbar) => {
    const { traineeInfo } = this.state;
    if (traineeInfo.createdAt >= '2019-02-14') {
      openSnackbar('Trainee Deleted Successfully', 'success');
    } else {
      openSnackbar('Trainee cannot be Deleted', 'error');
    }
    console.log(traineeInfo);
    this.deleteDialogClose();
  }

  handleSort = (field) => {
    const { order, orderBy } = this.state;
    let tabOrder = asend;
    if (orderBy === field && order === asend) {
      tabOrder = dsend;
    }
    this.setState({ orderBy: field, order: tabOrder });
  }

  handleSelect = (data) => {
    const { history } = this.props;
    history.push(`/trainee/${data.id}`);
  }

  handlePageChange = (event, page) => {
    this.setState({ page });
  }

  getTrainees = async () => {
    const trainee = await callApi({}, 'get', '/trainee/getall');
    Object.values(trainee.data.records[0].data.map((item) => (console.log(item))));
    return trainee;
  }

  render() {
    const {
      open,
      deleteDialog,
      order,
      orderBy,
      page,
      edit,
      traineeInfo,
      spinner,
    } = this.state;
    // const { match } = this.props;
    // const classes = this.useStyles();
    return (
      <SnackbarContext.Consumer>
        {(openSnackbar) => (
          <>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Button color="primary" variant="contained" onClick={this.onOpen} style={{ marginTop: '5px' }}>
                Add Trainee
              </Button>
              <AddDialog
                open={open}
                onClose={this.onCloseEvent}
                onSubmit={(state) => this.handleSubmit(openSnackbar, state)}
                loading={spinner}
              />
            </div>
            <Table
              id="id"
              data={trainees}
              column={[
                {
                  field: 'name',
                  label: 'Name',
                },
                {
                  field: 'email',
                  label: 'Email Address',
                  format: (value) => value && value.toUpperCase(),
                },
                {
                  field: 'createdAt',
                  label: 'Date',
                  align: 'right',
                  format: getFormattedDate,
                },
              ]}
              actions={[
                {
                  icon: <EditIcon />,
                  handler: this.editDialogOpen,
                },
                {
                  icon: <DeleteIcon />,
                  handler: this.deleteDialogOpen,
                },
              ]}
              orderBy={orderBy}
              order={order}
              onSort={this.handleSort}
              onSelect={this.handleSelect}
              count={100}
              page={page}
              onPageChange={this.handlePageChange}
            />
            <>
              { edit && (
                <EditDialog
                  details={traineeInfo}
                  open={edit}
                  onClose={this.editDialogClose}
                  onSubmit={() => this.handleEdit(openSnackbar)}
                  item={this.selectedItem}
                />
              )}
              { deleteDialog && (
                <DeleteDialog
                  open={deleteDialog}
                  onClose={this.deleteDialogClose}
                  onDelete={() => this.handleDelete(openSnackbar)}
                />
              )}
            </>
          </>
        )}
      </SnackbarContext.Consumer>
    );
  }
}
TraineeList.propTypes = {
  // match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default TraineeList;
