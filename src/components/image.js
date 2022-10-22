import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

export default function ImageApp() {
    const ref = useRef(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <>
            <div ref={ref}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Word of the Day
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Nepal" control={<Radio />} label="Nepal" />
                        </RadioGroup>
                    </CardContent>
                </Card>
            </div>
            <button onClick={onButtonClick}>Click me</button>
        </>
    )
}