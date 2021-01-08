import React, { Component } from 'react';
import { TextField, SelectField, RadioGroup } from '../../components';
import * as constants from '../../configs/constants';

class InputDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  handelNameChange = (event) => {
    console.log('handelNameChange fun');
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handelSportChange = (event) => {
    console.log('handelSportChange');
    this.setState({ sport: event.target.value, football: '', cricket: '' }, () => {
      console.log(this.state);
    });
  }

  handelCricketRole = (event) => {
    console.log('handelCricketRole');
    this.setState({ cricket: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handelFootballRole = (event) => {
    console.log('handelCricketRole');
    this.setState({ football: event.target.value }, () => {
      console.log(this.state);
    });
  }

  render() {
    const {
      name, sport, cricket, football,
    } = this.state;
    return (
      <>
        <p>Name</p>
        <TextField
          value={name}
          error=""
          onChange={this.handelNameChange}
        />
        <p>Select the game you play?</p>
        <SelectField
          value={sport}
          error=""
          defaultText={constants.defaultText}
          onChange={this.handelSportChange}
          options={constants.sport}
        />
        {
          sport === constants.cricket ? (
            <div>
              {' '}
              <RadioGroup
                value={cricket}
                error=""
                onChange={this.handelCricketRole}
                options={constants.cricketRole}
              />
              {' '}
            </div>
          ) : <p> </p>
        }
        {
          sport === constants.football ? (
            <div>
              {' '}
              <RadioGroup
                value={football}
                error=""
                onChange={this.handelFootballRole}
                options={constants.footballRole}
              />
              {' '}
            </div>
          ) : <p> </p>
        }
      </>
    );
  }
}
export default InputDemo;
