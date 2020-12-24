/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

class EditDialog extends Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle style={{ alignContent: 'start' }}>Edit Trainee</DialogTitle>
        <DialogContentText style={{ paddingLeft: '25px' }}>Enter your trainee details</DialogContentText>
        <div style={{ paddingLeft: '12px', paddingTop: '8px', paddingRight: '12px' }}>
          <TextField
            value
            label="Name*"
            variant="outlined"
            fullWidth
          />
        </div>
        <div style={{ paddingLeft: '12px', paddingTop: '8px', paddingRight: '12px' }}>
          <TextField
            value
            label="Email*"
            variant="outlined"
            fullWidth
          />
        </div>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancel</Button>
          <Button onClick={onClose} color="primary" variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
EditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default EditDialog;
