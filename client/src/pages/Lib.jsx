import React, { useState, useRef, useEffect } from 'react';
import PdfViewer from '../components/Upload Components/pdfcomp';
// import { useLocation } from "react-router-dom";
import axios from 'axios';

const Lib = (props) => {
  const [booksall, setBooksall] = useState([]);
  const [targetbook, setTargetbook] = useState();
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [pdfroute, setPdfRoute] = useState(null);
  const pdfViewerRef = useRef(null);


  const fetchPdf = (pdf) => {
    setPdfRoute(`http://localhost:5000/files/${pdf}`)
    setOpenPdf(true);
    if (pdfViewerRef.current) {
      pdfViewerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setSelectedBook(localStorage.getItem("bookData"))
    axios
      .get("http://localhost:5000/get-files")
      .then((response) => {
        setBooksall(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching booksall:", error);
      });
     
  }, []); 

  useEffect(()=>{
    setTargetbook(booksall.find( (arrae)=> arrae._id == selectedBook ))
  },[selectedBook])
  
  console.log(booksall)
  console.log(selectedBook)
  return (
    <>
      <div className='bg-slate-700 h-[1200px] p-2 flex-row'>
        <div className='justify-between flex overflow-hidden overflow-x-scroll no-scrollbar'>
          {targetbook.map((book, index) => (
            <div key={index} className='w-3/4 m-4 flex bg-yellow-200 h-60 p-3 justify-around rounded-2xl'>
              <div className='bg-slate-600 rounded-lg h-52 w-48'>
                <img className=" w-[190px] h-[210px] object-cover rounded-lg shadow-lg" src={`http://localhost:5000/files/${book.thumb}`} alt="" />
              </div>
              <div className='bg-slate-600 rounded-lg h-52 w-80 p-3 space-y-4 text-white uppercase'>
                <div>bookname: {book.title}</div>
                <div>book category: {book.category}</div>
                <button className="bg-green-500 mb-32 text-white p-1 rounded-md float-right w-full" onClick={() => fetchPdf(book.pdf)}>SHOW PDF</button>
              </div>
              <div className='bg-slate-600 rounded-lg text-white p-4 h-52 w-60'>
                <h1>COMMENTS</h1>
              </div>
            </div>
          ))}
        </div>
        {/* <hr />ref={pdfViewerRef} */}
        <div className='' >
          { <PdfViewer file={pdfroute} size="large" className="w-3/4"></PdfViewer>}
        </div>
      </div>
    </>
  )
}
export default Lib;
