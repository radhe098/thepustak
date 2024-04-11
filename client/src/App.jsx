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
 <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded-xl shadow-md z-50 duration-150">        
   <h2>Dialog Box</h2>
          <p>This is a dialog box.</p>
          <button onClick={() => setShowDialog(false)}>Close</button>
          {document.addEventListener('keydown', (event) => { if (event.key === 'Escape') {  setShowDialog(false);} })}
        </div>
      )}
    </>
  );
};

export default App;
