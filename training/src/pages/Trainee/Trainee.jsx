import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { AddDialog } from './Componants';

class Trainee extends Component {
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
      </>
    );
  }
}
export default Trainee;
