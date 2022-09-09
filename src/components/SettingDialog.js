import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';

export default function SettingDialog({ open, setOpen }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <List>
            <ListItem button onClick={() => navigate("/settings")}>
              <SettingsIcon /> <ListItemText primary="Setting" />
            </ListItem>
            <ListItem button onClick={() => navigate("/about")}>
              <InfoIcon /> <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => navigate("/help")}>
              <HelpIcon /> <ListItemText primary="Help" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
