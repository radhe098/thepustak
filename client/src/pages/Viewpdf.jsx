import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      if (container) {
        const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
        const newPageNumber = Math.ceil(numPages * scrollPercentage);
        setPageNumber(Math.min(numPages, Math.max(1, newPageNumber)));
      }
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [numPages]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToNextPage() {
    setPageNumber(Math.min(numPages, pageNumber + 1));
  }

  function goToPrevPage() {
    setPageNumber(Math.max(1, pageNumber - 1));
  }

  function zoomIn() {
    setScale(scale * 1.2);
  }

  function zoomOut() {
    setScale(scale / 1.2);
  }

  return (
    <div className="pdf-viewer bg-slate-600">
      <div className="pdf-toolbar ">
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Prev
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
      </div>
      <div className="pdf-document" ref={containerRef}>
        <Document
          file="/Jujutsu Kaisen - CH 051 @Manga_Gallery.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className="pdf-page">
              <Page pageNumber={index + 1} scale={scale} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
