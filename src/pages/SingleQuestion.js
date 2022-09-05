import React from 'react'
import question from '../assets/jsons/question.json'

export default function SingleQuestion() {
  return (
    <div>{question.map(e => {
      return (
        <div>
          <div>{e.question_en}</div>
          <div>{e.question_np}</div>
          <div>{e.answer}</div>
        </div>
      )
    })}</div>
  )
}
