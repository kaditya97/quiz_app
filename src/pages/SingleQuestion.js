import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useStopwatch } from 'react-timer-hook';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShowResult from '../components/ShowResult';

export default function SingleQuestion() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [radioValue, setRadioValue] = useState(null);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question } = state;

  const {
    seconds,
    minutes,
    pause,
  } = useStopwatch({ autoStart: true });

  const checkAnswer = () => {
    var iscorrect = false;
    var result = {};
    if (radioValue === question[currentQuestion].answer_en) {
      setScore(score + 1);
      iscorrect = true;
    } else if (radioValue === null) {
      setScore(score);
    } else {
      setScore(score - 0.2);
    }
    result["question_en"] = question[currentQuestion].question_en;
    result["question_ne"] = question[currentQuestion].question_ne;
    result["options_en"] = question[currentQuestion].options_en;
    result["answer_en"] = question[currentQuestion].answer_en;
    result["radioValue"] = radioValue;
    result["iscorrect"] = iscorrect;
    results.push(result);
    setRadioValue(null);
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
  return (
    <Container maxWidth="xl">
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { mode: "single" } })}>Back</Button>
        <h1 className='title-text'>Questions</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
        {/* <span>{minutes}:{seconds}</span> */}
      </div>
      <div className='body-content' style={{ minHeight: "70vh" }}>
        {question && !isResult && <h2 style={{ display: "flex", justifyContent: "center" }}>Question {currentQuestion + 1} of {question.length}</h2>}
        {question && !isResult && <Card>
          <CardHeader title={question[currentQuestion].question_en} />
          {/* <div>{question[currentQuestion].question_ne}</div> */}
          <CardContent>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={radioValue}
              onChange={e => { setRadioValue(e.target.value) }}
            >
              {question[currentQuestion].options_en.map((e, index) => {
                return (
                  <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                )
              })}
            </RadioGroup>
            {currentQuestion === question.length - 1 ? <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button> :
              <Button variant="contained" color="primary" onClick={handleClick}>Next</Button>}
          </CardContent>
        </Card>}
        {isResult && <ShowResult score={score} minutes={minutes} seconds={seconds} result={results} />}
      </div>
    </Container>
  )
}
