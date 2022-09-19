import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdf from '../assets/pdf/As-Built-survey.pdf';
// import PdfViewerComponent from '../components/PdfViewerComponent';

export default function Resources() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container>
      <div className="title">
        <Button variant="text" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>Back</Button>
        <h1 className='title-text'>Resources</h1>
        <h2 style={{ visibility: "hidden" }}>GoBack</h2>
      </div>
      <div className="body-content">
        <h1>Coming Soon..</h1>
      </div>
    </Container>
    // <div>
    //   <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    //   <div className="PDF-viewer">
    // 		<PdfViewerComponent document={'document.pdf'} />
    // 	</div>
    // </div>
  );
}
