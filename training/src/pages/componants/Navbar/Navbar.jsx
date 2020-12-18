import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Trainee Portal
          </Typography>
          <Button color="inherit">Trainee</Button>
          <Button color="inherit">TextField Demo</Button>
          <Button color="inherit">Input Demo</Button>
          <Button color="inherit">Children Demo</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Navbar;
