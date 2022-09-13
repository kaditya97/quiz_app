import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Games() {
    const navigate = useNavigate();
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    console.log(voices)

    return (
        <Container>
        <div className="title">
          <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
          <h1 className='title-text'>Games</h1>
          <h2 style={{ visibility: "hidden" }}>GoBack</h2>
        </div>
        <div className="body-content">
          <h1>Games</h1>
        </div>
      </Container>
    )
}