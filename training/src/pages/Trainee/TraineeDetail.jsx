import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardContent,
  // CardMedia,
  Typography,
  // makeStyles,
} from '@material-ui/core';
import moment from 'moment';
import trainees from './Data/trainee';
import { NoMatch } from '../NoMatch';

class TraineeDetail extends Component {
  getDate = (date) => {
    const formatedDate = moment(date).format('dddd, MMMM Do yyyy, hh:mm:ss a');
    return formatedDate;
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const data = trainees.find((element) => element.id === id);
    if (data) {
      return (
        <>
          <Card>
            <div style={{ display: 'flex', height: '160px', alignItems: 'center' }}>
              <img src="" height="120px" width="120px" alt="" />
              <CardContent>
                <Typography variant="h5">{data.name}</Typography>
                <Typography color="textSecondary">{this.getDate(data.createdAt)}</Typography>
                <Typography>{data.email}</Typography>
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TraineeDetail;
