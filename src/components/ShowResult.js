import React from 'react'
import { Card, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function ShowResult({ score, minutes, seconds, result }) {
  console.log(result)
  return (
    <>
      <div>
        <div><h2>Your Score: {score}</h2></div>
        <div><h3>Time: {minutes}:{seconds}</h3></div>
      </div>
      <div>
        {result.map((item, index) => {
          return (
            <Card key={index}>
              <CardContent>
                <CardHeader title={item.question_en} />
                <List>
                  {item.options_en.map((option, index) => {
                    if (option === item.radioValue && option === item.answer_en) {
                      return (
                        <ListItem>
                          <ListItemText key={index} primary={option} secondary="Correct" sx={{ color: "green" }} />
                          <CheckIcon sx={{ color: "green" }}/>
                        </ListItem>
                      )
                    }
                    else if (option === item.radioValue && option !== item.answer_en) {
                      return (
                        <ListItem>
                          <ListItemText key={index} primary={option} secondary="Incorrect" sx={{ color: "red" }} />
                          <ClearIcon sx={{ color: "red" }}/>
                        </ListItem>
                      )
                    }
                    else {
                      return (
                        <ListItem>
                          <ListItemText key={index} primary={option} />
                        </ListItem>
                      )
                    }
                  }
                  )}
                </List>
                {item.iscorrect ? null : <div>Answer: {item.answer_en}</div>}
              </CardContent>
            </Card>
          )
        }
        )}
      </div>
    </>
  )
}
