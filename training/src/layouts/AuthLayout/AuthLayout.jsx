import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../Componants';
import { Login } from '../../pages';

class AuthLayout extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Login history={history} />
        <Footer />
      </>
    );
  }
}
AuthLayout.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
export default AuthLayout;
