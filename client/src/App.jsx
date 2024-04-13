import React, { useEffect } from 'react';
import { useState } from 'react'; // Import useState if you need it
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
// import Viewpdf from './pages/Viewpdf';
import Upload from './components/Upload Components/Books';
import Register from './pages/Register';
import Lib from './pages/Lib';
import Login from './pages/Login';
import './index.css';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const Router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/profile', element: <Profile /> },
    { path: '/lib', element: <Lib /> },
    // {path: '/view-pdf/:pdfName', element:<Viewpdf/>},
    { path: '/upload', element: <Upload /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> }
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '/') {
        // Open the dialog box
        setShowDialog( prevshowDialog => !prevshowDialog);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <>
      <RouterProvider router={Router} />
      {showDialog && (
 <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border h-[20rem] w-[30rem] border-gray-300 rounded-xl shadow-md opacity-90 z-50 duration-150">    
 <div className='flex-col '>    
   <h2 className='text-center text-black font-semibold text-2xl '>Quick Introduction of Webpage</h2>
   <div className='flex justify-around text-lg mt-4 '>
   <div className='flex-col space-y-2 '>
          <h1>Routes</h1>
          <h2>/upload</h2>
          <h2>/profile</h2>
          <h2>/lib</h2>
          <h2>/login</h2>
          <h2>/register</h2>
          <p></p>
          </div>
   <div className='flex-col space-y-2'>
          <h1>Description</h1>
          <h2>Upload Page</h2>
          <h2>Profile Page</h2>
          <h2>Library Page</h2>
          <h2>login page</h2>
          <h2>Register Page</h2>
          <p></p>
          </div>
   </div>
          <button className=' top-0 right-0 fixed mr-2 transform translate-x-0 bg-red-300 px-3 border-black border ' onClick={() => setShowDialog(false)}>Close</button>
          {document.addEventListener('keydown', (event) => { if (event.key === 'Escape') {  setShowDialog(false);} })}
        </div></div>
      )}
    </>
  );
};

export default App;
