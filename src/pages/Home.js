import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionImage from '../assets/images/question.jpg'
import { Container, Box, Grid, Card, CardContent, CardMedia } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Speech from '../utils/Speech';
import UserDetail from '../components/UserDetail';
import SettingDialog from '../components/SettingDialog';

export default function Home() {
  const [open, setOpen] = React.useState(true);
  const [settingDialog, setSettingDialog] = React.useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('name')

  const quizTypes = [
    {
      "id": "1",
      "name": "MCQ",
      "description": "Choose the correct answer",
      "image": {QuestionImage}
    },
    {
      "id": "2",
      "name": "Single Answer",
      "description": "Input answer",
      "image": {QuestionImage}
    },
    {
      "id": "3",
      "name": "Guess",
      "description": "Guess the answer",
      "image": {QuestionImage}
    },
    {
      "id": "4",
      "name": "Resourse",
      "description": "Input multiple answer",
      "image": {QuestionImage}
    },
    {
      "id": "5",
      "name": "Games",
      "description": "Play games",
      "image": {QuestionImage}
    }

  ]

  const handleClick = (e) => {
    navigate('/questions', { state: { quizType: e.name } })
  }

  return (
    <Container maxWidth="xl">
      <div className="title">
        <h2 className='title-text'>Loksewa Quiz</h2>
        <div className='userinfo'>
          {name ? <h3>Welcome {name}</h3> : <h3>Welcome Guest</h3>}
          <Avatar alt="A" onClick={() => setSettingDialog(true)}><PersonIcon /></Avatar>
        </div>
      </div>
      <SettingDialog open={settingDialog} setOpen={setSettingDialog} />
      {name ?
        <Box sx={{ flexGrow: 1 }} className="box">
          <Grid container direction="row" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="grid">
            {quizTypes.map((e, index) => {
              return (
                <Grid item xs={8} key={index}>
                  <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(e)} className="card">
                    <CardMedia
                      component="img"
                      height="140"
                      image={QuestionImage}
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
        </Box> : <UserDetail open={open} setOpen={setOpen} />}
      <Speech />
    </Container>
  )
}
