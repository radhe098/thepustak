    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import PDFViewer from '../../pages/Viewpdf';
    import PdfComp from '../Upload Components/pdfcomp';
  const Categoriesdemo = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [pdffile, setPdffile] = useState(null);

    const showPdf = (pdf) => {
      setPdffile(`http://localhost:5000/files/${pdf}`);
      console.log("pdf loaded");
    };

    const handlePdfClick = (pdf) => {
      history.push(`/view-pdf/${pdf}`);
    };
    
    useEffect(() => {
      axios.get('http://localhost:5000/get-files')
        .then(response => {
          setBooks(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);
    
    return (
      <>
        {selectedBook && <PDFViewer file= {`http://localhost:5000/files/${pdf}`} />} {/* Pass the file property to PDFViewer */}
        <div className="border-black border-2  bg-gray-800 text-2xl min-w-[20rem] h-[3rem] pt-1 flex-wrap overflow-hidden overflow-x flex justify-left gap-8">
        <div className=" bg-yellow-200 text-black px-3  uppercase mx-2" style={{ transform: 'skew(-20deg)' }}> Sort By Categories </div>
          <div className="flex justify-center gap-8">
          <div><button className="text-white uppercase  mx-2">Learning</button></div>
          <div><button className="text-white uppercase  mx-2">Fiction</button></div>
          <div><button className="text-white uppercase  mx-2">Non-Fiction</button></div>
          <div><button className="text-white uppercase  mx-2">Manga</button></div>
        </div></div>
        <div className="border-black border-2 m-2 bg-gray-800 text-2xl rounded-2xl pr-4 pl-4 min-w-[20rem] h-[28rem] flex flex-wrap overflow-hidden overflow-x">
          <div className="nameoffeed text-2xl text-green-900 bg-white px-3 h-8 opacity-50 rounded-3xl">Recent feed</div>
          <div className="bookcontainer w-[auto] flex justify-center overflow-hidden">
            <div className="overflow-x-auto flex m-4  justify-between flex-row" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
              {books.map((book) => {
                return (
                  <div key={book.id} className="text-lg flex-wrap flex justify-between">
                    <div className="flex flex-col justify-between items-center m-4 w-40 rounded-lg hover:scale-105 transform transition-transform duration-300 bg-teal-200 h-[14rem] border-black" onClick={()=>{
                      showPdf(book.pdf)
                    }}>
                      <div className="h-48 ml-3 cursor-pointer">
                        <div className="flex justify-center mt-4 items-center relative h-[120px] w-[90px] bg-cover bg-center">
                          <img className="absolute w-full h-full object-cover rounded-lg shadow-lg " src={`http://localhost:5000/files/${book.thumb}`} alt="" />
                        </div>
                        <div className="w-32">
                          <h1 className="truncate text-lg font-semibold">{book.title}</h1>
                        </div>
                        <div>
                          <h1 className="text-md ml-3 italic">{book.category}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

    export default Categoriesdemo;

