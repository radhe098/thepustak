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
    <div className="border-black  border-2 m-2 bg-yellow-100 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[20rem] flex flex-wrap overflow-hidden overflow-x">
    <div className="nameoffeed text-2xl text-green-900 bg-white px-3 h-8 opacity-50 rounded-3xl">Recent feed</div>
    <div className="bookcontainer w-[auto] flex justify-between overflow-auto  ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((  book) =>{ return(
                  <> 
                <div className="text-lg align-center flex-wrap flex justify-between ">
                   <div className="flex flex-col justify-between w-28 m-8">
                   <h1 className="text-xl ml-2 font-semibold"> {book.title}</h1>
                   <img className="h-[120px] w-[90px] bg-cover" src={`http://localhost:5000/files/${book.thumb}`} alt="" />
                   <h2 className=" text-lg ml-3 font-mono"> {book.pdf}</h2>
                  <h1 className="text-lg ml-3 italic">{book.category} </h1></div>
                </div></>
            )})}  
        </div>  
    </div>
</div>
  </>

);
 }
export default Categoriesdemo;
