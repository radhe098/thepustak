import React, { useState } from "react";

const Categoriesdemo = () => {
const bookIds = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const randomIndex = Math.floor(Math.random() * bookIds.length);
const randomBookId = bookIds[randomIndex];
    const books=[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <>
    <div className="border-black  border-2 m-2 bg-yellow-100 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[12rem] flex flex-wrap overflow-hidden overflow-x">
    <div className="nameoffeed text-3xl ">Recent feed</div>
    <div className="bookcontainer w-[auto] flex justify-between overflow-auto ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((book) => (
                <div className="text-lg align-center flex-wrap flex justify-between ">
                    <img key={randomBookId}
                        src="/bookcover.jpeg"
                        className="object-cover h-[7rem] min-w-[6rem] "
                        alt=""
                    />
                    {randomBookId}
                </div>
            ))}
        </div>
    </div>
</div>

      <div className="border-black border-2 m-2 bg-green-200 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[12rem]">
        Horror Feed
        <div className="bookcontainer w-[auto] flex justify-between overflow-auto ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((book) => (
                <div className="text-lg align-center flex-wrap flex justify-between ">
                    <img key={randomBookId}
                        src="/bookcover.jpeg"
                        className="object-cover h-[7rem] min-w-[6rem] "
                        alt=""
                    />
                    {randomBookId}
                </div>
            ))}
        </div>
    </div>
  </div>
      <div className="border-black border-2 m-2 bg-yellow-100 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[12rem]">
        Fiction Feed
        <div className="bookcontainer w-[auto] flex justify-between overflow-auto ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((book) => (
                <div className="text-lg align-center flex-wrap flex justify-between ">
                    <img key={randomBookId}
                        src="/bookcover.jpeg"
                        className="object-cover h-[7rem] min-w-[6rem] "
                        alt=""
                    />
                    {randomBookId}
                </div>
            ))}
        </div>
    </div>
  </div>
      <div className="border-black border-2 m-2 bg-green-200 text-2xl rounded-2xl pr-4 pl-4  min-w-[20rem] h-[12rem]">
        Anime Feed
        <div className="bookcontainer w-[auto] flex justify-between overflow-auto ">
        <div className="overflow-x-auto flex justify-between flex-row gap-10" style={{flexWrap: 'nowrap', overflowX: 'auto'}}>
            {books.map((book) => (
                <div className="text-lg align-center flex-wrap flex justify-between ">
                    <img key={randomBookId}
                        src="/bookcover.jpeg"
                        className="object-cover h-[7rem] min-w-[6rem] "
                        alt=""
                    />
                    {randomBookId}
                </div>
            ))}
        </div>
    </div>
  </div>
          </>

);
            }
export default Categoriesdemo;
