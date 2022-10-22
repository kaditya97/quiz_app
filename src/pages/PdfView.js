import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PDFViewer from '../components/PDFViewer';
import { useLocation } from 'react-router-dom';

export default function PdfView() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type, list, url, name } = state;

  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/resourcelist', { state: { type: type, list: list } })}>Back</Button>
        <h1 className='title-text'>{name.length > 10 ? name.substring(0,10) + "..." : name}</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className="body-content pdf-container">
        <PDFViewer src={url} />
      </div>
    </Container>
  );
}