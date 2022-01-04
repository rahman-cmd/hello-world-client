import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
    console.log('hey i a working')
  };

  return (
    <div>
  
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Button>Delete</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}></Button>
          <Button onClick={handleClose} autoFocus>
            
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
