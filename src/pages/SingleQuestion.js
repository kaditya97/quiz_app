import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import questions from '../assets/jsons/question.json'
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useStopwatch } from 'react-timer-hook';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShowResult from '../components/ShowResult';

export default function SingleQuestion() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [radioValue, setRadioValue] = useState(null);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question_num } = state;

  const {
    seconds,
    minutes,
    pause,
  } = useStopwatch({ autoStart: true });

  const checkAnswer = () => {
    var iscorrect = false;
    var result = {};
    if (radioValue === question[currentQuestion].answer) {
      setScore(score + 1);
      iscorrect = true;
    }
    result["question_en"] = question[currentQuestion].question_en;
    result["question_ne"] = question[currentQuestion].question_ne;
    result["options"] = question[currentQuestion].options;
    result["answer"] = question[currentQuestion].answer;
    result["radioValue"] = radioValue;
    result["iscorrect"] = iscorrect;
    results.push(result);
  }


  const handleClick = () => {
    checkAnswer();
    setCurrentQuestion(currentQuestion + 1);
  }

  const handleSubmit = () => {
    checkAnswer();
    pause();
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
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { mode: "single" } })}>Back</Button>
        <span>{minutes}:{seconds}</span>
      </div>
      <div className='body-content' style={{ minHeight: "70vh" }}>
        {question && !isResult && <h2 style={{ display: "flex", justifyContent: "center" }}>Question {currentQuestion + 1} of {question.length}</h2>}
        {question && !isResult && <Card>
          <CardHeader title={question[currentQuestion].question_en} />
          <div>{question[currentQuestion].question_np}</div>
          <CardContent>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={radioValue}
              onChange={e => { setRadioValue(e.target.value) }}
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
        {isResult && <ShowResult score={score} minutes={minutes} seconds={seconds} result={results} />}
      </div>
    </Container>
  )
}
