import React, { useEffect, useState } from "react";
import axios from "axios";

const Categoriesdemo = () => {
  const [books, setBooks] = useState([]);
  // const books = [];

  useEffect(() => {
    axios.get('http://localhost:5000/get-files',
  //  {   headers: {
      //   'Access-Control-Allow-Origin' : '*',
      //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      // },
      // withCredentials: false}
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
    <div className="border-black  border-2 m-2 bg-yellow-100 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[12rem] flex flex-wrap overflow-hidden overflow-x">
    <div className="nameoffeed text-3xl ">Recent feed</div>
    <div className="bookcontainer w-[auto] flex justify-between overflow-auto ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((book) =>{ return(
                  <> 
                <div className="text-lg align-center flex-wrap flex justify-between ">
                   <div className="flex flex-col justify-between">
                     {/* <img key={book.id}
                        src="/bookcover.jpeg"
                        className="object-cover h-[7rem] min-w-[6rem] "
                        alt=""
                    /> */}
                   <h1> {book.pdf}</h1>
                  <h1 className="text-xl">{book.category} </h1></div>
                </div></>
            )})}  
        </div>  
    </div>
</div>
  </>

);
 }
export default Categoriesdemo;
