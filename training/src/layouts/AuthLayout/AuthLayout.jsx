import React, { Component } from 'react';
import { Footer } from '../Componants';
import { Login } from '../../pages';

class AuthLayout extends Component {
  render() {
    return (
      <>
        <Login />
        <Footer />
      </>
    );
  }
}
export default AuthLayout;
