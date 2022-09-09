import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";
import questionList from '../assets/jsons/questionList.json'
import { Container, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function QuestionsList() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { quizType } = state;
  console.log(quizType)

  const handleClick = (e) => {
    navigate('/singlequestion', { state: { quizType: e.name } })
  }

  return (
    <Container maxWidth="xl">
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>QuestionsList</h1>
      </div>
      <Offline>You are currently offline. Limited availability of resources.</Offline>
      <Online>You are currently online. Full access to resources.</Online>
      <ul>
        {questionList && questionList.map((e, index) => {
          return (
            <li key={index} onClick={() => handleClick(e)}>
              <h2>{e.name}</h2>
              {/* <ul>
                {e.options.map((e, index) => {
                  return (
                    <li key={index}>
                      <p>{e}</p>
                    </li>
                  )
                })}
              </ul> */}
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
