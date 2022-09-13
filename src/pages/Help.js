import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchBar from "material-ui-search-bar";

export default function Help() {
    const [searchValue, setSearchValue] = React.useState('');
    const navigate = useNavigate();
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    console.log(voices)

    return (
        <Container>
            <div className="title">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
                <h1 className='title-text'>Help</h1>
                <h2 style={{ visibility: "hidden" }}>GoBack</h2>
            </div>
            <div className="body-content">
                <h1>Help</h1>
                <SearchBar
                    value={searchValue}
                    onChange={(newValue) => setSearchValue(newValue)}
                    onRequestSearch={() => setSearchValue(searchValue)}
                />
            </div>
        </Container>
    )
}