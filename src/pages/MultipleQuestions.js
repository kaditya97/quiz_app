import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stopwatch from '../components/Stopwatch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MultipleQuestion() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question } = state;

  return (
    <Container maxWidth="xl">
      <div className="nav">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { mode: "multiple" }})}>Back</Button>
        <h1 className='title-text'>Questions</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className='body-content'>{question.map((e, index) => {
        return (
          <Card key={index} style={{marginBottom: "5px"}}>
            <CardHeader title={e.question_en} />
            {/* <div>{e.question_ne}</div> */}
            <CardContent>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {e.options_en.map((e, index) => {
                  return (
                    <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                  )
                })}
              </RadioGroup>
              <div>Ans: {e.answer_en}</div>
            </CardContent>
          </Card>
        )
      })}</div>
    </Container>
  )
}
