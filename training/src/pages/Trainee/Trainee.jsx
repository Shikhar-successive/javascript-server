import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetail from './TraineeDetail';

const Trainee = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}`}>
      <TraineeList match={match} />
    </Route>
    <Route exact path={`${match.path}/:id`} component={TraineeDetail} />
  </Switch>
);

Trainee.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Trainee;
