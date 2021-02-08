import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { AddDialog } from './Componants';
import trainees from './Data/trainee';
import { Table } from '../../components';

class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onOpen = () => {
    this.setState({ open: true });
  }

  onCloseEvent = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email Address',
            },
          ]}
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
};

export default TraineeList;
