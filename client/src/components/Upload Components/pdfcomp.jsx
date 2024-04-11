  import React, { useState } from "react";
  import { Document, Page as DisplayPage } from "react-pdf";
  import { PDFDownloadLink, Document as CreateDocument, Page as CreatePage, View } from '@react-pdf/renderer';

  // This is the component that will be used to create the PDF.
  const MyDoc = () => (
    <CreateDocument>
      <CreatePage>
        <View wrap={true}>
          
        </View>
      </CreatePage>
    </CreateDocument>
  );

  function Pdfcomp(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const containerStyle = {
      width: props.size === 'large' ? '69rem' : '41rem',
      height: props.size === 'large' ? '50rem' : '34rem',
      margin: props.size === 'large' ? '2.5rem' : '0.6rem',
    };
    return (
      <div className="pdf-div overflow-hidden bg-white  overflow-y-scroll rounded-lg border border-black pl-[-40px]" style={containerStyle}>
        <p className="sticky overflow-auto">
          Page {pageNumber} of {numPages}
        </p>
        <Document className="pl-8 rounded-lg *:" file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <DisplayPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
        {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}
      </div>
    );
  }
  
  export default Pdfcomp;