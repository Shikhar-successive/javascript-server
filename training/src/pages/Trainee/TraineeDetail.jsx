import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardContent,
  Typography,
} from '@material-ui/core';
import { NoMatch } from '../NoMatch';
import { getFormattedDate } from '../../libs/utils/getFormattedDate';

class TraineeDetail extends Component {
  render() {
    const traineeData = JSON.parse(localStorage.getItem('traineeDetail'));
    console.log(traineeData, '--------------------localStorage');
    if (traineeData) {
      return (
        <>
          <Card>
            <div style={{ display: 'flex', height: '160px', alignItems: 'center' }}>
              <img src="" height="120px" width="120px" alt="" />
              <CardContent>
                <Typography variant="h5">{traineeData.name}</Typography>
                <Typography color="textSecondary">{getFormattedDate(traineeData.createdAt)}</Typography>
                <Typography>{traineeData.email}</Typography>
              </CardContent>
            </div>
          </Card>
          <Typography align="center">
            <Link to="/">
              <Button variant="outlined" color="primary">
                Back
              </Button>
            </Link>
          </Typography>
        </>
      );
    }
    return (
      <NoMatch />
    );
  }
}
TraineeDetail.propTypes = {
  // match: PropTypes.objectOf(PropTypes.any).isRequired,
  // history: PropTypes.instanceOf(Object).isRequired,
};
export default TraineeDetail;
