import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export default function NapiCalculator() {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState("sqmtr")
    const [napivalue, setNapiValue] = useState(null)
    const [sqmtr, setSqmtr] = useState("")
    const [sqft, setSqft] = useState("")
    const [bigha, setBigha] = useState("")
    const [katha, setKatha] = useState("")
    const [dhur, setDhur] = useState("")
    const [ropani, setRopani] = useState("")
    const [aana, setAana] = useState("")
    const [paisa, setPaisa] = useState("")
    const [dam, setDam] = useState("")

    const areaConverter = (inputType, value) => {
        let sqmtr = 0, sqft = 0, bigha = 0, katha = 0, dhur = 0, ropani = 0, aana = 0, paisa = 0, dam = 0;
        switch (inputType) {
            case "sqmtr":
                sqmtr = value;
                sqft = (value / 0.093).toFixed(2)
                bigha = (value / 6772.63).toFixed(5)
                katha = (value / 338.63).toFixed(4)
                dhur = (value / 16.93).toFixed(3)
                ropani = (value / 508.74).toFixed(4)
                aana = (value / 31.8).toFixed(3)
                paisa = (value / 9.95).toFixed(3)
                dam = (value / 1.99).toFixed(2)
                break;
            case "sqft":
                sqmtr = (value * 0.093).toFixed(3)
                sqft = value;
                bigha = (value / 72900).toFixed(6)
                katha = (value / 3645).toFixed(5)
                dhur = (value / 182.25).toFixed(4)
                ropani = (value / 5476).toFixed(5)
                aana = (value / 342.25).toFixed(4)
                paisa = (value / 85.56).toFixed(3)
                dam = (value / 21.39).toFixed(3)
                break;
            case "bigha":
                sqmtr = (value * 6772.63).toFixed(2)
                sqft = (value * 72900).toFixed(2)
                bigha = value;
                katha = (value * 20).toFixed(2)
                dhur = (value * 400).toFixed(2)
                ropani = (value * 13.31).toFixed(2)
                aana = (value * 212.96).toFixed(2)
                paisa = (value * 851.84).toFixed(2)
                dam = (value * 3407.36).toFixed(2)
                break;
            case "katha":
                sqmtr = (value * 338.63).toFixed(2)
                sqft = (value * 3645).toFixed(2)
                bigha = (value / 20).toFixed(3)
                katha = value;
                dhur = (value * 20).toFixed(2)
                ropani = (value * 13.31 / 20).toFixed(2)
                aana = (value * 212.96 / 20).toFixed(2)
                paisa = (value * 851.84 / 20).toFixed(2)
                dam = (value * 3407.36 / 20).toFixed(2)
                break;
            case "dhur":
                sqmtr = (value * 16.93).toFixed(2)
                sqft = (value * 182.25).toFixed(2)
                bigha = (value / 400).toFixed(4)
                katha = (value / 20).toFixed(3)
                dhur = value;
                ropani = (value * 13.31 / 400).toFixed(3)
                aana = (value * 212.96 / 400).toFixed(2)
                paisa = (value * 851.84 / 400).toFixed(2)
                dam = (value * 3407.36 / 400).toFixed(2)
                break;
            case "ropani":
                sqmtr = (value * 508.74).toFixed(2)
                sqft = (value * 5476).toFixed(2)
                bigha = (value / 13.31).toFixed(3)
                katha = (value * 20 / 13.31).toFixed(2)
                dhur = (value * 400 / 13.31).toFixed(3)
                ropani = value;
                aana = (value * 212.96 / 13.31).toFixed(2)
                paisa = (value * 851.84 / 13.31).toFixed(2)
                dam = (value * 3407.36 / 13.31).toFixed(2)
                break;
            case "aana":
                sqmtr = (value * 31.8).toFixed(2)
                sqft = (value * 342.25).toFixed(2)
                bigha = (value / 212.96).toFixed(4)
                katha = (value * 20 / 212.96).toFixed(3)
                dhur = (value * 400 / 212.96).toFixed(2)
                ropani = (value * 13.31 / 212.96).toFixed(2)
                aana = value;
                paisa = (value * 851.84 / 212.96).toFixed(2)
                dam = (value * 3407.36 / 212.96).toFixed(2)
                break;
            case "paisa":
                sqmtr = (value * 9.95).toFixed(2)
                sqft = (value * 85.56).toFixed(2)
                bigha = (value / 851.84).toFixed(4)
                katha = (value * 20 / 851.84).toFixed(3)
                dhur = (value * 400 / 851.84).toFixed(2)
                ropani = (value * 13.31 / 851.84).toFixed(3)
                aana = (value * 212.96 / 851.84).toFixed(2)
                paisa = value;
                dam = (value * 3407.36 / 851.84).toFixed(2)
                break;
            case "dam":
                sqmtr = (value * 1.99).toFixed(2)
                sqft = (value * 21.39).toFixed(2)
                bigha = (value / 3407.36).toFixed(5)
                katha = (value * 20 / 3407.36).toFixed(4)
                dhur = (value * 400 / 3407.36).toFixed(2)
                ropani = (value * 13.31 / 3407.36).toFixed(4)
                aana = (value * 212.96 / 3407.36).toFixed(3)
                paisa = (value * 851.84 / 3407.36).toFixed(2)
                dam = value;
                break;
            default:
                break;
        }
        return { sqmtr, sqft, bigha, katha, dhur, ropani, aana, paisa, dam }
    }

    const calculate = (inputType, e) => {
        const { sqft, sqmtr, bigha, katha, dhur, ropani, aana, paisa, dam } = areaConverter(inputType, e.target.value);
        setSqft(sqft); setSqmtr(sqmtr); setBigha(bigha); setKatha(katha); setDhur(dhur); setRopani(ropani); setAana(aana); setPaisa(paisa); setDam(dam);
    }

    const getValue = e => {
        const { bigha, ropani } = areaConverter(selectedOption, e.target.value);
        const finalbigha = bigha.toString().split('.')[0];
        const { katha } = areaConverter("bigha", parseFloat("0." + bigha.toString().split('.')[1]));
        const finalkatha = katha.toString().split('.')[0];
        const { dhur } = areaConverter("katha", parseFloat("0." + katha.toString().split('.')[1]));
        const finalropani = ropani.toString().split('.')[0];
        const { aana } = areaConverter("ropani", parseFloat("0." + ropani.toString().split('.')[1]));
        const finalaana = aana.toString().split('.')[0];
        const { paisa } = areaConverter("aana", parseFloat("0." + aana.toString().split('.')[1]));
        const finalpaisa = paisa.toString().split('.')[0];
        const { dam } = areaConverter("paisa", parseFloat("0." + paisa.toString().split('.')[1]));
        setNapiValue({ finalbigha, finalkatha, dhur, finalropani, finalaana, finalpaisa, dam });
    }


    const options = [
        { value: 'sqmtr', label: 'SQ. METER - (बर्ग मिटर)' },
        { value: 'sqft', label: 'SQ. FOOT - (बर्ग फुट)' },
        { value: 'bigha', label: 'BIGAHA - (बिगाहा)' },
        { value: 'katha', label: 'KATHA - (कठा)' },
        { value: 'dhur', label: 'DHUR - (धुर)' },
        { value: 'ropani', label: 'ROPANI - (रोपनी)' },
        { value: 'aana', label: 'AANA - (आना)' },
        { value: 'paisa', label: 'PAISA - (पैसा)' },
        { value: 'dam', label: 'DAM - (दम)' }
    ]

    return (
        <Container>
            <div className="title">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate("/tools")}>Back</Button>
                <h1 className='title-text'>Napi Calculator</h1>
                <h2 style={{ visibility: "hidden" }}>GoBack</h2>
            </div>
            <div className="body-content">
                <div style={{ width: "80vw" }}>
                    <Select options={options} defaultValue={options[0]} onChange={e => setSelectedOption(e.value)} />
                    <input type="number" placeholder="Enter Value" onChange={e => getValue(e)} />
                    {napivalue && <>
                        <p>{napivalue.finalbigha} Bigha {napivalue.finalkatha} Katha {napivalue.dhur} Dhur</p>
                        <p>{napivalue.finalropani} Ropani {napivalue.finalaana} Aana {napivalue.finalpaisa} Paisa {napivalue.dam} Dam </p>
                    </>}
                </div>
                <h4>SQ. METER - (बर्ग मिटर)</h4>
                <input type="number" placeholder="Enter SQ. Meter" value={sqmtr} onChange={e => calculate("sqmtr", e)} />
                <h4>SQ. FOOT - (बर्ग फुट)</h4>
                <input type="number" placeholder="Enter SQ. Foot" value={sqft} onChange={e => calculate("sqft", e)} />
                <h4>BIGAHA - (बिगाहा)</h4>
                <input type="number" placeholder="Enter BIGAHA" value={bigha} onChange={e => calculate("bigha", e)} />
                <h4>KATHA - (कठ्ठा)</h4>
                <input type="number" placeholder="Enter KATHHA" value={katha} onChange={e => calculate("katha", e)} />
                <h4>DHUR - (धुर)</h4>
                <input type="number" placeholder="Enter DHUR" value={dhur} onChange={e => calculate("dhur", e)} />
                <h4>ROPANI - (रोपनी)</h4>
                <input type="number" placeholder="Enter ROPANI" value={ropani} onChange={e => calculate("ropani", e)} />
                <h4>AANA - (आना)</h4>
                <input type="number" placeholder="Enter AANA" value={aana} onChange={e => calculate("aana", e)} />
                <h4>Paisa - (पैसा)</h4>
                <input type="number" placeholder="Enter Paisa" value={paisa} onChange={e => calculate("paisa", e)} />
                <h4>DAAM - (दाम)</h4>
                <input type="number" placeholder="Enter DAAM" value={dam} onChange={e => calculate("dam", e)} />
            </div>
        </Container>
    )
}
