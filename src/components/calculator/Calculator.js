import React, { useState, useEffect } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { evaluate } from 'mathjs';
import { decode } from "he"

export default function Calculator() {
    const navigate = useNavigate();
    const [result, setResult] = useState(0);
    const [log, setLog] = useState("");
    const [ans, setAns] = useState(0);
    const [clickedEquals, setClickedEquals] = useState(false);

  // handle kyobard exeptions
  useEffect(() => {
    window.onerror = () => {setLog("Error"); setClickedEquals(false)};
  }, []);

  const keyClick = (keyLog, math) => {
    let currentLog = log;
    if (math === 'clear') {
      setLog("");
      setResult(0);
    }

    if (math === 'delete') {
      if (currentLog.charAt(currentLog.length - 2).match(/[ns]/)) {
        setLog(currentLog.slice(0, currentLog.length - 4))
      } else {
        setLog(currentLog.slice(0, currentLog.length - 1))
      }
    }

    if (math === 'equals') {
      const isBalanced = parenthesesAreBalanced(currentLog);

      if (!isBalanced) {
        console.log(isBalanced)
        setLog(currentLog.toString());
        currentLog = currentLog.toString();
        console.log(currentLog)
      }

      handleEqualsClick(currentLog);
    }

    if (math.match(/trig|log|number|comma|prnths|ans|sqrt|exponent/)) {
      if (clickedEquals) {setLog(keyLog);setClickedEquals(false)}
      else setLog(currentLog + keyLog);
    }

    if (math.match(/sum|sub|multiply|divide|power|sqr|inv/)) {
      if (clickedEquals) {setLog(`Ans${keyLog}`);setClickedEquals(false)}
      else setLog(currentLog + keyLog);
    }
  }

  const parenthesesAreBalanced = string => {
    var parentheses = "[]{}()",
      stack = [],
      i, character, bracePosition;

    for (i = 0; character = string[i]; i++) {
      bracePosition = parentheses.indexOf(character);

      if (bracePosition === -1) { continue; }

      if (bracePosition % 2 === 0) {
        stack.push(bracePosition + 1); // push next expected brace position
      } else {
        if (stack.length === 0 || stack.pop() !== bracePosition) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  const handleEqualsClick = currentLog => {
    const times = decode('&#x000D7;');
    const divide = decode('&divide;');
    const sqrt = decode('&radic;');
    const sqrtReg = new RegExp(sqrt, 'g');
    const timesReg = new RegExp(times, 'g');

    // change log so it's understanable to mathjs eval() method
    const newLog = currentLog.replace(timesReg, '*')
      .replace(divide, '/')
      .replace(/Ans/g, `(${ans.toString()})`)
      .replace(/E/g, '10^')
      .replace(/log/g, 'log10')
      .replace(/ln/g, 'log')
      .replace(sqrtReg, 'sqrt');

    let result = evaluate(newLog);
    let finalResult;

    if (currentLog === '') {
      result = 0;
    }

    // trim result if too long
    if (result.toString().length > 11) {
      finalResult = result.toString().slice(0, 11);
    } else finalResult = result;

    setAns(finalResult)
    setResult(finalResult)
    setClickedEquals(true)
  }

  const handleLogChange = input => setLog(input);

    return (
      <Container>
        <div className="title">
          <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate("/tools")}>Back</Button>
          <h1 className='title-text'>Calculator</h1>
          <h2 style={{ visibility: "hidden" }}>GoBack</h2>
        </div>
        <div className="calc-container">
          <p className="description" >Casio <br /><br />
            Ex- 911fx</p>
          <Screen
            log={log}
            result={result}
            handleLogChange={handleLogChange}
          />
          <Keyboard keyClick={keyClick} />
        </div>
      </Container>
    );
}

