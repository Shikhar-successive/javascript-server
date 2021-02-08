import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import trainees from './Data/trainee';
import { AddDialog } from './Componants';

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
    return (
      <>
        <Button color="primary" variant="contained" onClick={this.onOpen} style={{ marginTop: '10px' }}>
          Add Trainee
        </Button>
        <AddDialog
          open={open}
          onClose={this.onCloseEvent}
          onSubmit={this.onCloseEvent}
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
