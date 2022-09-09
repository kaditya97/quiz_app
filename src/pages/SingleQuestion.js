import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import questions from '../assets/jsons/question.json'
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stopwatch from '../components/Stopwatch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShowResult from '../components/ShowResult';

export default function SingleQuestion() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question_num } = state;

  const handleClick = () => {
    console.log(question[currentQuestion].answer)
    setCurrentQuestion(currentQuestion + 1);
    setScore(score + 1)
  }

  const handleSubmit = () => {
    setScore(score + 1)
    setIsResult(true);
  }

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
    let random = questions.sort(() => .5 - Math.random()).slice(0, question_num);
    setQuestion(random)
  }, [])
  return (
    <Container maxWidth="xl">
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { quizType: "name" } })}>Back</Button>
        <Stopwatch />
      </div>
      <div style={{ marginTop: "10vh" }}>
        {question && !isResult && <h2>Question {currentQuestion+1} of {question.length}</h2>}
        {question && !isResult && <Card>
          <CardHeader title={question[currentQuestion].question_en} />
          <div>{question[currentQuestion].question_np}</div>
          <CardContent>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {question[currentQuestion].options.map((e, index) => {
                return (
                  <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                )
              })}
            </RadioGroup>
            {currentQuestion === question_num - 1 ? <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button> :
              <Button variant="contained" color="primary" onClick={handleClick}>Next</Button>}
          </CardContent>
        </Card>}
        {isResult && <ShowResult score={score} />}
      </div>
    </Container>
  )
}
