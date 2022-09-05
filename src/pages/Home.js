import React from 'react'
import quizTypes from '../assets/jsons/quizTypes.json'
import { QuestionsList } from './QuestionsList'
import { Container, Box, Grid, Card, CardContent, CardMedia } from '@mui/material'

export default function Home() {


  const handleClick = (e) => {
    console.log(e.target.key)
    QuestionsList(e.target.key)
  }

  return (
    <Container maxWidth="sm">
      <div className="title">
        <h1 className='title-text'>Quiz App</h1>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className="grid">
          {quizTypes.map(e => {
            return (
              <Grid item xs={8} spacing={2} key={e.name}>
                <Card sx={{ maxWidth: 345 }} key={e.name} onClick={handleClick}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={e.image}
                    alt={e.name}
                  />
                  <CardContent>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                  </CardContent>
                </Card>
              </Grid>)
          })}
        </Grid>
      </Box>
    </Container>
  )
}
