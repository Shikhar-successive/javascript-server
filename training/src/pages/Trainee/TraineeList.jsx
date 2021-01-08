import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddDialog, EditDialog, DeleteDialog } from './Componants';
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
      data: [],
    };
  }

  async componentDidMount() {
    console.log('inside GETtraine ----');
    const trainee = await callApi({}, 'get', '/trainee/getall');
    if (trainee.data) {
      const traineeData = trainee.data.records[0].data;
      this.setState({ data: traineeData });
    } else if (localStorage.getItem('token') === null) {
      const { history } = this.props;
      history.push('/login');
    }
    console.log(trainee);
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
      role: 'trainee',
      createdBy: 'Admin',
    };
    this.setState({
      spinner: true,
    });
    const user = await callApi(userInfo, 'post', '/trainee/create');
    console.log(user, 'TTTTTTTTTTTTTTTTT');
    if (user.data) {
      console.log(user);
      openSnackbar('Trainee Creadted Successfully', 'success');
      this.onCloseEvent();
      this.getTrainees();
    } else if (user.response.status) {
      if (localStorage.getItem('token') === null) {
        this.onCloseEvent();
        openSnackbar(user.response.data.message, 'error');
        const { history } = this.props;
        history.push('/login');
      }
      if (user.response.status === 403) {
        openSnackbar(user.response.data.message, 'error');
      }
    }
    return '';
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

  handleSelect = async (openSnackbar, data) => {
    console.log(data, 'trainee data');
    localStorage.setItem('traineeDetail', JSON.stringify(data));
    await this.getTrainees();
    if (localStorage.getItem('token') === null) {
      openSnackbar('token expired', 'error');
      const { history } = this.props;
      history.push('/login');
    }
    const { history } = this.props;
    history.push(`/trainee/${data.originalId}`);
  }

  handlePageChange = (event, page) => {
    this.setState({ page });
  }

  getTrainees = async () => {
    console.log('inside GETtraine ----');
    const trainee = await callApi({}, 'get', '/trainee/getall');
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
      data,
    } = this.state;
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
              data={data}
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
              onSelect={(detail) => this.handleSelect(openSnackbar, detail)}
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
  history: PropTypes.instanceOf(Object).isRequired,
};

export default TraineeList;
