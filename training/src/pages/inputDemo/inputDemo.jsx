import React, { Component } from 'react';
import * as Yup from 'yup';
import {
  TextField,
  SelectField,
  RadioGroup,
  Button,
} from '../../components';
import * as constants from '../../configs/constants';
import style from './style';

class InputDemo extends Component {
  schema = Yup.object().shape({
    name: Yup.string().required(),
    sport: Yup.string().required(),
    cricket: Yup.string().required('What you do is required field'),
    football: Yup.string().required('What you do is required field'),
  });

  constructor() {
    super();
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
      touched: {},
      error: {},
    };
  }

  handelNameChange = (event) => {
    // console.log('handelNameChange fun');
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handelSportChange = (event) => {
    // console.log('handelSportChange');
    this.setState({ sport: event.target.value, football: '', cricket: '' }, () => {
      console.log(this.state);
    });
  }

  handelCricketRole = (event) => {
    console.log(event);
    console.log(event.target.value);
    this.setState({ cricket: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handelFootballRole = (event) => {
    // console.log('handelCricketRole');
    this.setState({ football: event.target.value }, () => {
      console.log(this.state);
    });
  }

  getError = (componant) => {
    const { touched, error } = this.state;
    if (touched[componant]) {
      return error[componant] || '';
    }
    return null;
  }

  handelValidationOnBlur = (component) => () => {
    console.log('handelValidationOnBlur', component);
    const compError = {};
    const { touched } = this.state;
    touched[component] = true;
    this.setState({ touched }, () => {
      const {
        name, sport, football, cricket,
      } = this.state;
      try {
        this.schema.validateSync({
          name, sport, football, cricket,
        }, { abortEarly: false });
      } catch (error) {
        if (error) {
          error.inner.forEach((err) => {
            compError[err.path] = err.message;
          });
        } else {
          this.setState({ error: '' });
        }
        this.setState({ error: compError });
      }
    });
    console.log(component, '----onBlur');
    console.log(touched, '------touched');
    console.log(compError, '-------error');
  }

  componantErrors = () => {
    let returnVal = true;
    const arr = [];
    const {
      error, cricket, football,
    } = this.state;
    // if (sport.toUpperCase() === Object.keys(error))
    // console.log(Object.keys(error).length !== 0, '>>>>>>>>>>>>>>componantErrors');
    if (Object.keys(error).includes('name')) {
      Object.keys(error).forEach((item) => {
        // console.log(typeof item, '********************** AAAAAAAAAitem');
        arr.push(item);
        console.log(arr, '----------------AAAAAAAAAARRRRRRRR');
        console.log(arr.includes('name'), '====================condd');
        if (!arr.includes('name')) {
          returnVal = false;
        }
        // console.log(item === 'name', '********************** item');
        return true;
      });
    }
    if (cricket) {
      constants.cricketRole.forEach((item) => {
        if (item.value.includes(cricket)) {
          console.log(cricket, '^^^^^^^^^^^^^^^^^^^^^^^^^^^6');
          returnVal = false;
        }
        return true;
      });
    }
    if (football) {
      constants.cricketRole.forEach((item) => {
        if (item.label.includes(football)) {
          console.log(football, '^^^^^^^^^^^^^^^^^^^^^^^^^^^6');
          returnVal = false;
        }
        return true;
      });
    }
    return returnVal;
  }

  componantIsTouched = () => {
    const { touched } = this.state;
    console.log(Object.keys(touched).length !== 0, '>>>>>>>>>>>>>componantIsTouched');
    return Object.keys(touched).length !== 0;
  }

  render() {
    console.log(this.componantErrors(), '==========hellERRRRRRRRRRR');
    console.log(!this.componantIsTouched(), '==========helloppppppp');
    const {
      name, sport, cricket, football, error, touched,
    } = this.state;
    console.log(Object.keys(error), '<<<<<<<<<<<<<<err');
    console.log(touched, '<<<<<<<<<<<<<tch');
    console.log(sport, '<<<<<<<<<<<<<Sprt');
    console.log(constants.cricketRole[1].label, '<<<<<<<<<<<<<CCCCKKKK');
    return (
      <>
        <p>Name</p>
        <TextField
          value={name}
          error={this.getError('name')}
          onChange={this.handelNameChange}
          onBlur={this.handelValidationOnBlur('name')}
        />
        <p>Select the game you play?</p>
        <SelectField
          value={sport}
          error={this.getError('sport')}
          defaultText={constants.defaultText}
          onChange={this.handelSportChange}
          onBlur={this.handelValidationOnBlur('sport')}
          options={constants.sport}
        />
        {
          sport === constants.cricket ? (
            <div>
              {' '}
              <p>What you do?</p>
              <RadioGroup
                value={cricket}
                error={this.getError('cricket')}
                onChange={this.handelCricketRole}
                options={constants.cricketRole}
                onBlur={this.handelValidationOnBlur('cricket')}
              />
              {' '}
            </div>
          ) : <p> </p>
        }
        {
          sport === constants.football ? (
            <div>
              <p>What you do?</p>
              {' '}
              <RadioGroup
                value={football}
                error={this.getError('football')}
                onChange={this.handelFootballRole}
                options={constants.footballRole}
                onBlur={this.handelValidationOnBlur('football')}
              />
              {' '}
            </div>
          ) : <p> </p>
        }
        <Button
          color="primary"
          disabled={this.componantErrors() || !this.componantIsTouched()}
          style={style.buttonStyle}
          value="Submit"
          onClick={() => {}}
        />
      </>
    );
  }
}
export default InputDemo;
