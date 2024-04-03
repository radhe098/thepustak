import {React, createElement, useState} from 'react';
import { LiaEdit } from "react-icons/lia";
// import Link from 'react';

function Userdetails() {  
 const [uploaedebooks, setUploedebooks] = useState("");
 const editprofile=()=>{
      
 }
  return (
    <main className="profile-page">
    <section className="relative block ">
<img className="top-0 w-full max-h-32 bg-center bg-cover" src="./bgpic.jpeg" />

      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: 'translateZ(0px)'}}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section className="relative py-1 bg-yellow-100 ">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words -mt-12 bg-white w-auto mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-between mt-12">
              <div className=" w-80 order-1 flex justify-between  ">
                <div className=' '>
                <div className="h-40 flex justify-center">
                  <img src="/ppicsample.jpg" alt='ok' className="rounded-3xl h-auto border-none absolute w-48 " />         
                 </div>
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700  px-4  border rounded-md">
                Jhon Doe
              </h3>
              <div>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia, magnam qui exercitationem neque, facere, tempore porro quidem nesciunt nihil delectus ipsa voluptate doloribus corrupti iste soluta vitae assumenda itaque.</div>
                </div>
              </div>
              <div className='px-4 self-center order-2 '>
              <div className=" px-4">
                <div className="flex justify-center">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Books-Score</span>
                  </div>
                  <div className=" p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" ml-6 px-3 ">
                <button onClick={editprofile()}><LiaEdit size={30}/></button>
                  <button className="bg-pink-500 w- active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-4 ml-8 w-48 ease-linear transition-all duration-150" type="button">
                    Connect
                  </button>

                </div>
              </div></div>
              
            </div>
            
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">  Your Reading 
              <div className=' float-end -mt-10'onClick={() => toggleVisibility(!isVisible)}>:::</div><br />
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex justify-between">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    bio
                  </p>
                </div>
              </div>
              <div className=''>
              <h1>Your Uploaded Books </h1>
              <div className='flex justify-center m-2'>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            </div>
          </div>
        </div>
      </footer>
    </section>
  </main>
  );
}

export default Userdetails
