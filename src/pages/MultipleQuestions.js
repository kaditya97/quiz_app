import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStopwatch } from 'react-timer-hook';
import { Container, Button, Card, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShowResult from '../components/ShowResult';

export default function MultipleQuestion() {
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question } = state;

  const {
    seconds,
    minutes,
    pause,
  } = useStopwatch({ autoStart: true });

  const checkAnswer = (value, e) => {
    var iscorrect = false;
    var result = {};
    if (value === e.answer_en) {
      setScore(score + 1);
      iscorrect = true;
    } else if (value === null) {
      setScore(score);
    } else {
      setScore(score - 0.2);
    }
    result["question_en"] = e.question_en;
    result["question_ne"] = e.question_ne;
    result["options_en"] = e.options_en;
    result["answer_en"] = e.answer_en;
    result["radioValue"] = value;
    result["iscorrect"] = iscorrect;
    results.push(result);
  }

  const handleSubmit = () => {
    pause();
    setIsResult(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <Container maxWidth="xl">
      <div className="nav">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { mode: "multiple" }})}>Back</Button>
        <h1 className='title-text'>Questions</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className='body-content'>
        {!isResult && question.map((e, index) => {
        return (
          <Card key={index} style={{marginBottom: "5px"}}>
            <CardHeader title={e.question_en} />
            <CardContent>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={m => checkAnswer(m.target.value, e)}
              >
                {e.options_en.map((e, index) => {
                  return (
                    <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                  )
                })}
              </RadioGroup>
            </CardContent>
          </Card>
        )
      })
      }
      {!isResult && <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>}
      {isResult && <ShowResult score={score} minutes={minutes} seconds={seconds} result={results} />}
      </div>
    </Container>
  )
}
