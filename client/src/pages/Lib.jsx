import React, { useState, useRef, useEffect } from 'react';
import PdfComp from '../components/Upload Components/pdfcomp';
// import { useLocation } from "react-router-dom";
import axios from 'axios';

const Lib = () => {
  const [booksall, setBooksall] = useState([]);
  // const [targetbook, setTargetbook] = useState();
  const [openPdf, setOpenPdf] = useState(false);  //pdf visil=ble
  const [selectedBook, setSelectedBook] = useState();   //for selected book
  const [pdfroute, setPdfroute] = useState(null);   //for fetched pdf route
  const pdfViewerRef = useRef(null);  //for scrollling

 
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
  const divvisible=()=>{ 
    setOpenPdf(true);
   }
  // useEffect(()=>{
  //   setTargetbook(booksall.find( (arrae)=> arrae._id == selectedBook ))
  // },[selectedBook])
  const fetchPdf = (pdf) => {
    const route =(`http://localhost:5000/files/${pdf}`)
    setPdfroute(route)
    console.log(`pdf loaded ${pdfroute}`)
    divvisible();
    if (pdfViewerRef.current) {
      pdfViewerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log(booksall)
  console.log(selectedBook) 
  return (
    <>
      <div className='bg-slate-700 h-[1200px] p-2 flex-row'>
        <div className='justify-between flex overflow-hidden overflow-x-scroll no-scrollbar'>
          {booksall.map((book, index) => (
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
        <hr />
        <div className='' ref={pdfViewerRef}>
          { openPdf && pdfroute && < pdfroute pdfroute={pdfroute} size="large" className="" /> }
        </div>
      </div>
    </>
  )
}
export default Lib;
