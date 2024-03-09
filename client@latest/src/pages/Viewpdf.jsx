import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const Viewpdf = () => {
  return (
    <>
        {/* <h1 className=' text-3xl mt-32 text-center'>hello</h1> */}
        <Document file="">
      <Page pageNumber={1} />
        </Document>
    </>
  )
}

export default Viewpdf
