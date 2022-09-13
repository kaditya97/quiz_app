import React from 'react';
import { useNavigate } from 'react-router-dom'
import Speech from '../utils/Speech';
import { Container, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>About</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className="body-content">
        <Speech />
      </div>
    </Container>
  );
}