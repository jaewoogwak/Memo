import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useRef } from 'react';
import styled from 'styled-components'
import './memoStyle.css'

const AddButtonWrapper = styled.div`
    width: 100%;
    height: 74px;
`

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const input = useRef();
  const { onClick : addMemo, date } = props;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log('data Submit', e.target);
    console.log(input.current.value)
    addMemo(input.current.value, date)
    handleClose();
  }
  return (
    <AddButtonWrapper>
      <Button className = "addBtn" variant="outlined" onClick={handleClickOpen}>
        할 일 추가
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <p>무슨 생각 하세요?</p>
          <input 
            type ="text" 
            autoFocus
            placeholder="What do you think of?"
            type="text"
            ref={input}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSubmit}>할 일 추가</Button>
        </DialogActions>
      </Dialog>
    </AddButtonWrapper>
  );
}