import { useState } from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './pages/profile'
import Viewpdf from './pages/Viewpdf';
import Upload from './pages/Upload';
import Login from './pages/Login';
import './index.css'

// import Form from './components/Home Componants/form'
function App() {
  const Router =(createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/profile', element: <Profile /> },
    // { path: '/form', element: <Form /> },
    {path: '/view-pdf', element:<Viewpdf/>},
    {path: '/upload', element:<Upload/>},
    {path: '/login', element:<Login/>}
  ]));
  return (
    <>
   <RouterProvider router={Router} />
    </>
  )
}
export default App

