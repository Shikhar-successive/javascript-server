import React, { Component } from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Trainee, TextFieldDemo, InputDemo, ChildrenDemo, NoMatch,
} from '../pages';
import { PrivateLayout } from '../layouts';

class PrivateRoute extends Component {
  render() {
    return (
      <>
        <PrivateLayout />
        <Router>
          <Switch>
            <Route exact path="/" component={Trainee} />
            <Route exact path="/TextField-Demo" component={TextFieldDemo} />
            <Route exact path="/Input-Demo" component={InputDemo} />
            <Route exact path="/Children-Demo" component={ChildrenDemo} />
            <Route default component={NoMatch} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default PrivateRoute;
