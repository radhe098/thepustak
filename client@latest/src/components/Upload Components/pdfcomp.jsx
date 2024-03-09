import React, { useState } from "react";
import { Document, Page as DisplayPage } from "react-pdf";
import { PDFDownloadLink, Document as CreateDocument, Page as CreatePage, View } from '@react-pdf/renderer';

// This is the component that will be used to create the PDF.
const MyDoc = () => (
  <CreateDocument>
    <CreatePage>
      <View wrap={true}>
        {/* fancy things here */}
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

  return (
    <div className="pdf-div w-[500px] h-[300px]">
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
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