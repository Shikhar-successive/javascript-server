import React, { Component } from 'react';
import {
  BrowserRouter as
  Router,
  Route,
} from 'react-router-dom';
import { AuthLayout } from '../layouts';

class AuthRoute extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/login" component={AuthLayout} />
      </Router>
    );
  }
}
export default AuthRoute;
