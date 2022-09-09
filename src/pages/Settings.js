import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Settings() {
    const navigate = useNavigate();
    const RemoveName = () => {
        localStorage.removeItem('name')
        window.location.reload();
    }
    return (
        <>
            <Container maxWidth="xl">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
                <div>Settings</div>
                <Button variant="contained" onClick={RemoveName}>Remove Name</Button>
            </Container>
        </>
    )
}
