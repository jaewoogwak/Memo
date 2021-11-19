import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef } from 'react';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const input = useRef();
  const { onClick : addMemo } = props;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log('data Submit', e.target);
    console.log(input.current.value)
    addMemo(input.current.value)
    handleClose();
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        메모 추가
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <p>무슨 생각 하세요?</p>
          <input 
            type ="text" 
            autoFocus
            // margin="dense"
            // id="name"
            placeholder="What do you think of?"
            type="text"
            ref={input}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSubmit}>생각 추가</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}