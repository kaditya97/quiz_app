import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Box, Grid, Card, CardContent } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ResourceList from '../assets/jsons/resource.json';

export default function Resources() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>Resources</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className="">
        {ResourceList &&
          <Box sx={{ flexGrow: 1 }} className="box">
            <Grid container direction="row" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="grid">
              {ResourceList.map((resource, index) => (
                <Grid item xs={8} sm={4}>
                  <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/resourcelist', { state: { type: resource.type, list: resource.list } })} className="card">
                    <CardContent className='card-content'>
                      <h2>{resource.type}</h2>
                      <p>{resource.description}</p>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        }
      </div>
    </Container>
  );
}
