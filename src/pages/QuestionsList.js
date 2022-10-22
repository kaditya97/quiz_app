import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";
import questionList from '../assets/jsons/questionList.json'
import { Container, Button, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import InfoIcon from '@mui/icons-material/Info';
import questions from '../assets/jsons/question.json'

function SelectQuestions({ open, setOpen, mode, question }) {
  const [questionCount, setQuestionCount] = useState(10);
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const handledown = () => {
    if (questionCount > 5) {
      setQuestionCount(questionCount - 5)
    }
  };
  const handleup = () => {
    if (question.length - 5 > questionCount) {
      setQuestionCount(questionCount + 5)
    }
  };
  const handleClick = () => {
    const questions = question.sort(() => .5 - Math.random()).slice(0, questionCount)
    if(mode === "single") navigate('/singlequestion', { state: { question: questions } });
    if(mode === "multiple") navigate('/multiplequestions', { state: { question: questions } });
    if(mode === "guess") navigate('/guess', { state: { question: questions } });
    if(mode === "handsfree") navigate('/handsfree', { state: { question: questions } });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ display: "flex", justifyContent: "center" }}>
          <h3>Total Questions available: {question.length}</h3>
        </DialogContent>
        <DialogContent style={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={handledown} aria-label="Minus" size='large'>
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
          <h2>{questionCount}</h2>
          <IconButton onClick={handleup} aria-label="Plus" size='large'>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </DialogContent>
        <DialogContent style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={handleClick}>Show Questions</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}


export default function QuestionsList() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mode } = state;

  async function getQuestionsFromApi(url) {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async (e) => {
    if (e.url) {
      let q = await getQuestionsFromApi(e.url)
      setQuestion(q.questions)
      setOpen(true)
    } else {
      setQuestion(questions)
      setOpen(true);
    }
  }

  return (
    <Container maxWidth="xl">
      <SelectQuestions open={open} setOpen={setOpen} mode={mode} question={question} />
      <div className="nav">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>Questions</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <Offline>You are currently offline. Limited availability of resources.</Offline>
      <Online>You are currently online. Full access to resources.</Online>

      <div style={{ marginTop: "8vh" }}>
        <List>
          {questionList && questionList.map((e, index) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={e.name} secondary={e.description} onClick={() => handleClick(e)}/>
                <InfoIcon  onClick={() => {console.log("clicked")}}/>
              </ListItem>
            )
          })}
        </List>
      </div>
    </Container>
  )
}
