import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Note from '../components/Note/Note'

export default function Notes() {
    const navigate = useNavigate()
    return (
        <Container>
            <div className="title">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
                <h1 className='title-text'>Notes</h1>
                <h2 style={{ visibility: "hidden" }}>GoBack</h2>
            </div>
            <div className="body-content">
                <Note />
            </div>
        </Container>
    )
}
