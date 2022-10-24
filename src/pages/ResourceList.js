import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Hidden, List, ListItem, ListItemText } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoIcon from '@mui/icons-material/Info';

export default function ResourceList() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { type, list } = state;
    return (
        <>
            <div className="nav">
                <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/resources')}>Back</Button>
                <h1 className='title-text'>{type.length > 10 ? type.substring(0,10) + "..." : type}</h1>
                <h2 style={{ visibility: "hidden" }}>GoBack</h2>
            </div>
            <div style={{ marginTop: "8vh" }}>
                <List>
                    {list.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item.name} onClick={() => navigate('/pdfview', { state: { type: type, list: list, url: item.url, name: item.name } })} />
                            <InfoIcon onClick={() => { console.log("clicked") }} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    )
}
