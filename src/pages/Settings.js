import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageApp from '../components/image';

export default function Settings() {
    const navigate = useNavigate();
    const RemoveName = () => {
        localStorage.removeItem('name')
        window.location.reload();
    }
    return (
        <>
            <Container maxWidth="xl">
                <div className="title">
                    <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
                    <h1 className='title-text'>Settings</h1>
                    <h2 style={{ visibility: "hidden" }}>GoBack</h2>
                </div>
                <div className='body-content'>
                    <Button variant="contained" onClick={RemoveName}>Remove Name</Button>
                </div>
                <ImageApp />
            </Container>
        </>
    )
}
