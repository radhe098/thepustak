import {React, useState, useRef} from 'react'
import PdfViewer from '../components/Upload Components/pdfcomp';
import targetbook from '../components/Home Componants/Categoriesdemo'
import CommonAncesstor from '../components/CommanAncesstor';
// import axios  from 'axios';

const Lib = (books) => {
    const [openPdf, setOpenPdf] = useState(false);
    const pdfViewerRef = useRef(null);

        const opendoc = () => {
        setOpenPdf(prevOpenPdf => !prevOpenPdf); 
        if (!openPdf && pdfViewerRef.current) {
            pdfViewerRef.current.scrollIntoView({ behavior: 'smooth' });
        }  
        };

    return (    
    <>
      <div className='bg-slate-700 h-[1200px] p-2 flex-row justify-center'>
      <div className='justify-center flex'><div className='w-3/4 m-4 flex bg-yellow-200 h-60 p-3 justify-around rounded-2xl'>
           <div className='bg-slate-600 rounded-lg h-52 w-48'>img</div>
              <div className='bg-slate-600 rounded-lg h-52 w-80 p-3 space-y-4 text-white uppercase'>
              
     <div>bookname:  </div>
    <div>book category</div>                
                <div>book Rating</div>
                <div>Upload Date</div>
                <button className="bg-green-500 mb-32 text-white p-1 rounded-md float-right w-full" onClick={opendoc}>SHOW PDF</button>
              </div>
              <div className='bg-slate-600 rounded-lg text-white p-4 h-52 w-60'>
                <h1>COMMENTS</h1>
              </div>
      </div></div>
            <div ref={pdfViewerRef}>
            {
            openPdf && <PdfViewer size="large" className="w-3/4"></PdfViewer>}
      </div></div>
    </>
  )
}

export default Lib;