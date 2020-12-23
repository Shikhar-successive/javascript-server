import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { AddDialog } from './Componants';
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
    };
  }

  onOpen = () => {
    this.setState({ open: true });
  }

  onCloseEvent = () => {
    this.setState({ open: false });
  };

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

  render() {
    const { open, order, orderBy } = this.state;
    const { match } = this.props;
    // const classes = this.useStyles();
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button color="primary" variant="contained" onClick={this.onOpen} style={{ marginTop: '10px' }}>
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
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
        />
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TraineeList;
