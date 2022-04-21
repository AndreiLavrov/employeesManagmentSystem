import { useState } from 'react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { addEmployee } from '../api/employees.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'end',
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addEmployeeHandler = () => {
    if (newUserName === '') return;
    dispatch(addEmployee(newUserName));
    handleClose();
    setNewUserName('');
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add employee</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={style}
          noValidate
          autoComplete="off"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            Set the name of new employee
          </Typography>
          <TextField
            error={false}
            id="outlined-error-helper-text"
            label="Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <Box sx={buttonWrapper}>
            <Button disabled={newUserName === ''} variant="contained" onClick={addEmployeeHandler}>
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
