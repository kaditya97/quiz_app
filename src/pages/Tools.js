import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Box, Grid, Card, CardMedia, CardContent } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TouchImage from '../assets/images/touch.jpg'

export default function Tools() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>Tools</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className="">
        <Box sx={{ flexGrow: 1 }} className="box">
          <Grid container direction="row" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="grid">
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 400 }} onClick={() => navigate('/calculator')} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={TouchImage}
                  alt="Multiple Questions"
                />
                <CardContent className='card-content'>
                  <h2>Calculator</h2>
                  <p>Simple Calculator</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 400 }} onClick={() => navigate('/napicalculator')} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={TouchImage}
                  alt="Multiple Questions"
                />
                <CardContent className='card-content'>
                  <h2>Napi Calculator</h2>
                  <p>Simple Calculator</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  )
}
