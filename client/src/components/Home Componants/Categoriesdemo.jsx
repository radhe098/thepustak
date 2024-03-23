import React, { useEffect, useState } from "react";
import axios from "axios";

const Categoriesdemo = () => {
  const [books, setBooks] = useState([]);
  // const books = [];

  useEffect(() => {
    axios.get('http://localhost:5000/get-files',
   {
      //  headers: {
      //   'Access-Control-Allow-Origin' : '*',
      //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      // },
      withCredentials: false}
      )
      .then(response => {
        setBooks(response.data.data);
        // books.push(response.data);
        console.log(books)
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, [books]);
  return (
    <>
    <div className="border-black  border-2 m-2 bg-yellow-100 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[28rem] flex flex-wrap overflow-hidden overflow-x">
    <div className="nameoffeed text-2xl text-green-900 bg-white px-3 h-8 opacity-50 rounded-3xl">Recent feed</div>
    <div className="bookcontainer w-[auto] flex justify-center overflow-hidden">
        <div className="overflow-x-auto flex m-4 justify-between flex-row " style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((  book) =>{ return(
                  <> 
                <div className="text-lg flex-wrap flex justify-between ">
                   <div className="flex flex-col justify-between items-center m-4 w-40 rounded-lg bg-teal-200  border-black">
                    <div className="h-[12rem] wra"> 
                   <div className=" mt-5 relative h-[120px] w-[90px] bg-cover bg-center">
    <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" src={`http://localhost:5000/files/${book.thumb}`} alt="" />
</div>
              <h1 className="text-xl font-semibold"> {book.title}</h1>
              <div className="w-20 overflow-hidden"> <h2 className=" text-lg ml-3 font-mono"> {book.pdf}</h2></div>
                  <h1 className="text-lg ml-3 italic">{book.category} </h1></div>
                </div></div></>
            )})}  
        </div>  
    </div>
</div>
  </>

);
 }
export default Categoriesdemo;
