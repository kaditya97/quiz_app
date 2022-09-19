import React from 'react'
import Select from 'react-select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UserDetail({open, setOpen}) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };

  const handleSkip = () => {
    setOpen(false);
    localStorage.setItem('name', 'Guest')
  };

  const handleSubmit = () => {
    localStorage.setItem('name', firstName)
    localStorage.setItem('lastname', lastName)
    localStorage.setItem('gender', gender)
    window.location.reload();
  }

  const genderOptions = [
    {value: "male", label: "Male"},
    {value: "female", label: "Female"},
    {value: "other", label: "Other"}
  ]

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your personal Details.
          </DialogContentText>
          <Select options={genderOptions} onChange={e => setGender(e.value)} placeholder="Select Gender" />
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setLastName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleSkip}>Skip for Now</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
