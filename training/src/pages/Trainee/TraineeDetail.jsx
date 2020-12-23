import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardContent,
  Typography,
} from '@material-ui/core';
import trainees from './Data/trainee';
import { NoMatch } from '../NoMatch';
import { getFormattedDate } from '../../libs/utils/getFormattedDate';

class TraineeDetail extends Component {
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
                <Typography color="textSecondary">{getFormattedDate(data.createdAt)}</Typography>
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
