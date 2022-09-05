import React from 'react'
import quizTypes from '../assets/jsons/quizTypes.json'
import { QuestionsList } from './QuestionsList'

export default function Home() {
  const handleClick = (e) => {
    console.log(e.target.value)
    QuestionsList(e.target.value)
  }

  return (
    <div>{quizTypes.map(e => {
      return (
        <div key={e.name}>
          <img src={e.image} alt={e.name} height={100} />
          <div onClick={e => handleClick(e)}>{e.name}</div>
          <div>{e.description}</div>
        </div>
      )
    })}</div>
  )
}
