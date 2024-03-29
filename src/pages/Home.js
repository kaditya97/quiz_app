import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png';
import NotesImage from '../assets/images/analytics.png';
import SingleQuestionImage from '../assets/images/questions.jpeg'
import MultiQuestionImage from '../assets/images/questions.jpg'
import HandsfreeImage from '../assets/images/voice.jpg'
import GuessImage from '../assets/images/guess.jpg'
import ResourcesImage from '../assets/images/resource.jpg'
import ToolsImage from '../assets/images/tools.jpg'
import { Container, Box, Grid, Card, CardContent, CardMedia } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import UserDetail from '../components/UserDetail';
import SettingDialog from '../components/SettingDialog';

export default function Home() {
  const [open, setOpen] = React.useState(true);
  const [settingDialog, setSettingDialog] = React.useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('name')

  return (
    <Container maxWidth="xl">
      <div className="title">
        <h2 className='title-text'><img src={Logo} alt="quiz" width={40} height={30}/>Quiz</h2>
        <div className='userinfo'>
          {name ? <h3>Hi! {name}</h3> : <h3>Welcome Guest</h3>}
          <Avatar alt="A" onClick={() => setSettingDialog(true)} style={{marginLeft: "5px", background: "#fff"}}><PersonIcon sx={{color: "#E38B29"}}/></Avatar>
        </div>
      </div>
      <SettingDialog open={settingDialog} setOpen={setSettingDialog} />
      {name ?
        <Box sx={{ flexGrow: 1 }} className="box">
          <Grid container direction="row" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="grid">
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/notes')} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={NotesImage}
                  alt="Notes"
                />
                <CardContent className='card-content'>
                  <h2>Notes</h2>
                  <p>Write notes</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/questions', { state: { mode: "multiple" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={SingleQuestionImage}
                  alt="Multiple Questions"
                />
                <CardContent className='card-content'>
                  <h2>Multiple Questions</h2>
                  <p>Answer multiple questions at a time</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/questions', { state: { mode: "single" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={MultiQuestionImage}
                  alt="Single Question"
                />
                <CardContent className='card-content'>
                  <h2>Single Question</h2>
                  <p>Answer a question at a time</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/handsfree', { state: { mode: "handsfree" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={HandsfreeImage}
                  alt="Handsfree"
                />
                <CardContent className='card-content'>
                  <h2>Handsfree Question</h2>
                  <p>Answer a question at a time</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/questions', { state: { mode: "guess" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={GuessImage}
                  alt="Guess"
                />
                <CardContent className='card-content'>
                  <h2>Guess</h2>
                  <p>Guess the answer</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/resources', { state: { quizType: "e.name" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={ResourcesImage}
                  alt="Resourse"
                />
                <CardContent className='card-content'>
                  <h2>Resourse</h2>
                  <p>Read Resources</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/tools', { state: { quizType: "e.name" } })} className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image={ToolsImage}
                  alt="tools"
                />
                <CardContent className='card-content'>
                  <h2>Tools</h2>
                  <p>Useful Tools</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> : <UserDetail open={open} setOpen={setOpen} />}
    </Container>
  )
}
