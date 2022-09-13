import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import question from '../assets/jsons/question.json'
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stopwatch from '../components/Stopwatch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MultipleQuestion() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question_num } = state;

  async function getMoviesFromApi() {
    try {
      let response = await fetch('https://raw.githubusercontent.com/kaditya97/geojson/master/cadaster.json');
      let responseJson = await response.json();
      console.log(responseJson)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMoviesFromApi()
  }, [])
  return (
    <Container maxWidth="xl">
      <div className="nav">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { quizType: "name" }})}>Back</Button>
        <Stopwatch />
      </div>
      <div className='body-content'>{question.map((e, index) => {
        return (
          <Card key={index}>
            <CardHeader title={e.question_en} />
            <div>{e.question_np}</div>
            <CardContent>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {e.options.map((e, index) => {
                  return (
                    <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                  )
                })}
              </RadioGroup>
              <div>Ans: {e.answer}</div>
            </CardContent>
          </Card>
        )
      })}</div>
    </Container>
  )
}
