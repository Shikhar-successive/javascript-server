import React, { Component } from 'react';
import {
  Grid, Paper, Avatar, TextField, InputAdornment, Button,
} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import callApi from '../../libs/utils/api';
import { SnackbarContext } from '../../contexts/SnackBarProvider/SnackBarProvider';

class Login extends Component {
  schema = Yup.object().shape({
    email: Yup.string().email().required('Email is Required Field'),
    password: Yup.string()
      .required('Password is Required Field')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/g, 'must have 8 characters, 1 number, 1 lower and uppercase letters, 1 special characters'),
  });

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      spinner: false,
      touched: {},
      btnDisable: false,
    };
  }

  handelEmailChange = (event) => {
    this.setState({ email: event.target.value }, () => {
    });
  }

  handelPasswordChange = (event) => {
    this.setState({ password: event.target.value }, () => {
    });
  }

  hasError = () => {
    const {
      email,
      password,
    } = this.state;
    const data = {
      email: `${email}`,
      password: `${password}`,
    };
    try {
      // console.log(!this.schema.validateSync(this.state), '??????????????? Hserror');
      return !this.schema.validateSync(data);
    } catch (err) {
      return true;
    }
  }

  onToched = (componant) => {
    const { touched } = this.state;
    this.setState({ touched: { ...touched, [componant]: true } });
    // console.log(this.state, '------------------ONTOUCHED');
  }

  isTouched = () => {
    const { touched } = this.state;
    // console.log(Object.keys(touched), '=============length');
    return Object.keys(touched).length !== 0;
  }

  getError = (componant) => {
    const {
      email,
      password,
    } = this.state;
    const data = {
      email: `${email}`,
      password: `${password}`,
    };
    const { touched } = this.state;
    if (touched[componant] && this.hasError) {
      // console.log(componant, '>>>>>>>>>>>>>>>>>>>>>>> GETERROR');
      try {
        this.schema.validateSyncAt(componant, data);
      } catch (err) {
        return err.message;
      }
    }
    return null;
  }

  onLogin = async (openSnackbar) => {
    const { email, password } = this.state;
    this.setState({
      spinner: true,
      btnDisable: true,
    });
    const user = await callApi(email, password);
    console.log(user);
    // console.log(user.data.Data);
    if (user.Data) {
      // console.log('inside USERR');
      this.setState({
        spinner: false,
      });
      localStorage.setItem('token', user);
      const { history } = this.props;
      history.push('/Trainee');
    } else {
      // console.log('insude else');
      this.setState({
        btnDisable: false,
        spinner: false,
      });
      openSnackbar(user, 'error');
    }
  }

  render() {
    const paperStyle = {
      padding: 20,
      height: '65vh',
      width: '55vh',
      margin: '25px auto',
    };
    const AvatarColor = {
      backgroundColor: ' #f01539',
    };
    const {
      email,
      password,
      spinner,
      btnDisable,
    } = this.state;
    return (
      <SnackbarContext.Consumer>
        {(openSnackbar) => (
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={AvatarColor}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Login</h2>
                <div style={{ marginTop: '8px' }}>
                  <TextField
                    value={email}
                    error={this.getError('email')}
                    helperText={this.getError('email')}
                    onChange={this.handelEmailChange}
                    onBlur={() => this.onToched('email')}
                    label="Email Address"
                    variant="outlined"
                    type="Email"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ marginTop: '12px' }}>
                  <TextField
                    value={password}
                    error={this.getError('password')}
                    helperText={this.getError('password')}
                    onChange={this.handelPasswordChange}
                    onBlur={() => this.onToched('password')}
                    label="Password*"
                    type="password"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VisibilityOffIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ marginTop: '28px' }}>
                  <DialogActions>
                    <Button fullWidth disabled={this.hasError() || !this.isTouched() || btnDisable} onClick={() => this.onLogin(openSnackbar)} color="primary" variant="contained">
                      {
                        spinner && <CircularProgress size="1.5rem" />
                      }
                      Submit
                    </Button>
                  </DialogActions>
                </div>
              </Grid>
            </Paper>
          </Grid>
        )}
      </SnackbarContext.Consumer>
    );
  }
}
Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
export default Login;
