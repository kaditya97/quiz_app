import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Speech, { Voice } from '../utils/Speech';
import { Container, Button, Card, CardHeader, CardContent, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';

export default function Handsfree() {
    const [value, setValue] = useState('');
    const [blocked, setBlocked] = useState(false);
    const [radioValue, setRadioValue] = useState(null);

    const navigate = useNavigate();
    const onSpeak = () => {
        console.log('onSpeak');
    }
    const { speak } = useSpeechSynthesis({onEnd: onSpeak});

    const question = "Whic city is capital of Nepal?";
    const options = ["Kathmandu", "New Delhi", "Berlin", "Paris"];

    const onEnd = () => {
        console.log("onEnd");
        // You could do something here after listening has finished
    };

    const onResult = (result) => {
        console.log("onResult", result);
        speak({ text: "You choosed option" + result });
        stop();
        setValue(result);
    };

    const onError = (event) => {
        if (event.error === 'not-allowed') {
            setBlocked(true);
        }
    };

    const { listen, listening, stop } = useSpeechRecognition({
        onResult,
        onEnd,
        onError,
    });


    const handleChange = (event) => {
        console.log(event.target.value);
        if (event.target.value == "Kathmandu") {
            console.log("You choosed option" + event.target.value);
        }
    }

    const handleSubmit = (event) => {
        console.log(event.target.value);
        if (event.target.value == "Kathmandu") {
            console.log(event.target.value);
        }
    }

    const speakListen = () => {
        console.log("speakListen");
        // speak({
        //     text: question, onEnd: () => {
        //         speak({
        //             text: "Options:", onEnd: () => {
        //                 options.forEach(function (option) {
        //                     speak({ text: option });
        //                 }).then(function () {
        //                     speak({ text: "Please select an option" });
        //                     listen({ lang: 'en-GB' });
        //                 }
        //                 );
        //             }
        //         })
        //     }
        // });
        speak({ text: question, onEnd: onEnd });
    }

    // useEffect(() => {
    //     speakListen();
    // }, []);

    return (
        <Container>
            <div className="title">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
                <h1 className='title-text'>Handsfree</h1>
                <h2 style={{ visibility: "hidden" }}>GoBack</h2>
            </div>
            <div className="body-content">
                <Card>
                    <CardHeader title={question} />
                    <CardContent>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={radioValue}
                            onChange={handleChange}
                        >
                            {options.map((e, index) => {
                                return (
                                    <FormControlLabel key={index} value={e} control={<Radio />} label={e} />
                                )
                            })}
                        </RadioGroup>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                        {/* <Button variant="contained" color="primary" onClick={handleClick}>Next</Button> */}
                    </CardContent>
                </Card>
                <Button onClick={speakListen}>SpeakListen</Button>
                <Speech />
                <Voice />
            </div>
        </Container>
    );
}
