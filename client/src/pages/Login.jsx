import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from "axios";
// import {New} from '../components/new'
const Login = () => {
  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');

const navigateTo = useNavigate();
// 2 functions for input blanking
const settheemail =(event)=>{
  setEmail(event.target.value)
}
const setthepass =(event)=>{
  setPassword(event.target.value)
}
//
// }
const onSubmit = async (e)=>{
await e.preventDefaultvalue();
const formData= new FormData();
// formData.append("name",name);
formData.append("email",email);
formData.append("password",password);

try {
    const responese =await axios.post("http://localhost:5000/register",formData,{
      headers: {
        "Content-Type": "multipart/form-data",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
      withCredentials:false });
} catch (error) {
      alert(error)
    
  
  if (responese.data.status === "ok") {
    alert("Registered Successfully!!!");
    // getPdf();
  }}
}
   return (
    <>
    <div className='bg-yellow-200 flex-shrink-0  h-screen flex justify-between'>
      <div className=' overflow-hidden sm:block w-7/12 m-6 rounded-xl bg-yellow-50 shadow-xl text-2xl'>
      <div class=" flex-col justify-between h-[1500px] animate-loop-scroll">
<img src='https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg' alt="" className=' scale-100 my-3 rounded-xl' />
<img src='https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg' alt="" className=' scale-100 my-3 rounded-xl ' />
<img src='https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg' alt="" className=' scale-100 my-3 rounded-xl ' />
<img src='https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg' alt="" className=' scale-100 my-3 rounded-xl ' />
<img src='https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg' alt="" className=' scale-100 my-3 rounded-xl ' />
      </div>
      </div>
      <div className=' bg-slate-800 w-3/12 mt-2 m-6 rounded-3xl p-4 flex-1' >
        {/* <img src="/Literature.jpg" alt="" className='' /> */}
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 p-8 rounded-lg bg-green-200" onSubmit={navigateTo('/')} method="POST">
          <div className="sm:mx-auto sm:w-full items-center sm:max-w-sm">
           <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            Login Yourself
          </h2>
        </div>
        <div>
        </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">                
              <input  id="email"  name="email"  type="email"
                value={email}  onChange={settheemail}  autoComplete="email"  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetfocus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={setthepass}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {/* <New>Sign in</New> */}
            </div>
          </form>
          <div className=' text-white flex justify-around mt-7'>
            <h1 className=" text-white text-xl  "> Register Yourself </h1> <button onClick={()=>navigateTo('/register')} className="border text-lg border-black w-36 h-8 hover:bg-indigo-500 bg-indigo-600 rounded-lg  ">Sign Up</button>
          </div>
        </div>
      </div>
      </div>
  </>
  )
}

export default Login

