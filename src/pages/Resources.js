import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdf from '../assets/pdf/As-Built-survey.pdf';
// import PdfViewerComponent from '../components/PdfViewerComponent';

export default function Resources() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* <div className="PDF-viewer">
				<PdfViewerComponent document={'document.pdf'} />
			</div> */}
    </div>
  );
}
