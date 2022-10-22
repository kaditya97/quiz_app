import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function PDFViewer({ src }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '92vh',
          width: '100vw',
        }}
      >
        <Viewer fileUrl={src} plugins={[defaultLayoutPluginInstance]}/>
      </div>
    </Worker>
  );
}