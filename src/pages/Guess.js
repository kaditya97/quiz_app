import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Box, Button, Card, CardHeader, CardContent } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LinearProgress from '@mui/material/LinearProgress';

export default function Guess() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { question } = state;

  const handleClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  const handleSubmit = () => {
    navigate('/questions', { state: { mode: "guess" } });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/questions', { state: { mode: "guess" } })}>Back</Button>
        <h1 className='title-text'>Guess</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className='body-content' style={{ minHeight: "70vh" }}>
        {question && <h2 style={{ display: "flex", justifyContent: "center" }}>Question {currentQuestion + 1} of {question.length}</h2>}
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        {question && <Card>
          <CardHeader title={question[currentQuestion].question_en} />
          <CardContent>
            {currentQuestion === question.length - 1 ? <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button> :
              <Button variant="contained" color="primary" onClick={handleClick}>Next</Button>}
          </CardContent>
        </Card>}
      </div>
    </Container>
  )
}