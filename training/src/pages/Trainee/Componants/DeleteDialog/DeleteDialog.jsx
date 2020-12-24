import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

class DeleteDialog extends Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle style={{ alignContent: 'start' }}>Delete Trainee</DialogTitle>
        <DialogContentText style={{ paddingLeft: '25px' }}>Do you really want to delete Trainee</DialogContentText>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancel</Button>
          <Button onClick={onClose} color="primary" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default DeleteDialog;
