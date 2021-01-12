import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { AuthRoute, PrivateRoute } from './routes';
// import { Trainee } from './pages';
// import { theme } from './theme';

function App() {
  // const myTheme = theme();
  return (
    // <div className={myTheme.root}>
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login" component={AuthRoute} />
          <Route default component={PrivateRoute} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
