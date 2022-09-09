import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Button, List, ListItem } from '@mui/material';
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
              <Button variant='text' size="large" startIcon={<SettingsIcon />}>Settings</Button>
            </ListItem>
            <ListItem button onClick={() => navigate("/about")}>
              <Button variant='text' size="large" startIcon={<InfoIcon />}>About</Button>
            </ListItem>
            <ListItem button onClick={() => navigate("/help")}>
              <Button variant='text' size="large" startIcon={<HelpIcon />}>Help</Button>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  )
}
