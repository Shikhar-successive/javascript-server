import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddDialog, EditDialog, DeleteDialog } from './Componants';
import trainees from './Data/trainee';
import { Table } from '../../components';
import { getFormattedDate } from '../../libs/utils/getFormattedDate';

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
    };
  }

  onOpen = () => {
    this.setState({ open: true });
  };

  onCloseEvent = () => {
    this.setState({ open: false });
  };

  editDialogOpen = (item) => {
    this.selectedIem = item;
    this.setState({ edit: true });
  };

  editDialogClose = () => {
    this.selectedIem = null;
    this.setState({ edit: false });
  };

  handleEdit = (item) => {
    console.log(item);
    this.editDialogClose();
  }

  deleteDialogOpen = (item) => {
    this.selectedIem = item;
    this.setState({ deleteDialog: true });
  };

  deleteDialogClose = () => {
    this.selectedIem = null;
    this.setState({ deleteDialog: false });
  };

  handleDelete = () => {
    console.log(this.selectedIem);
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

  // handleSelect = (data) => {
  //   const { history } = this.props;
  //   history.push(`/trainee/${data.id}`);
  // }

  handlePageChange = (event, page) => {
    this.setState({ page });
  }

  render() {
    const {
      open,
      deleteDialog,
      order,
      orderBy,
      page,
      edit,
    } = this.state;
    const { match } = this.props;
    // const classes = this.useStyles();
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button color="primary" variant="contained" onClick={this.onOpen} style={{ marginTop: '5px' }}>
            Add Trainee
          </Button>
          <AddDialog
            open={open}
            onClose={this.onCloseEvent}
            onSubmit={this.onCloseEvent}
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
          // onSelect={this.handleSelect}
          count={100}
          page={page}
          onPageChange={this.handlePageChange}
        />
        <>
          { edit && (
            <EditDialog
              open={edit}
              onClose={this.editDialogClose}
              onSubmit={this.handleEdit}
              item={this.selectedIem}
            />
          )}
          { deleteDialog && (
            <DeleteDialog
              open={deleteDialog}
              onClose={this.deleteDialogClose}
            />
          )}
        </>
        <div>
          {
            trainees.map((item) => (
              <ul key={item.id}>
                <li>
                  <Link to={`${match.path}/${item.id}`}>{item.name}</Link>
                </li>
              </ul>
            ))
          }
        </div>
      </>
    );
  }
}
TraineeList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TraineeList;
