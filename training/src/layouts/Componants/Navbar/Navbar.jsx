import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Trainee Portal
          </Typography>
          <Button href="/" color="inherit">Trainee</Button>
          <Button href="/TextField-Demo" color="inherit">TextField Demo</Button>
          <Button href="/Input-Demo" color="inherit">Input Demo</Button>
          <Button href="/Children-Demo" color="inherit">Children Demo</Button>
          <Button href="/logout" color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Navbar;
