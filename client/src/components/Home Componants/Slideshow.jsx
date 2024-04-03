import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import Slides from '../Hooks/Slides';
import bokimg from '/public/the secret.jpeg'
const Slideshow = () => {
  const s = ["https://media.istockphoto.com/id/1326978045/photo/lonely-big-tree-growing-up-on-ancient-books-like-a-painting-in-literature.jpg?s=1024x1024&w=is&k=20&c=g8ecENdt3_8cTp-u7xEdypASED0jOgpR9qeGNYKFD0M=","https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://media.istockphoto.com/id/619245784/vector/fairytale-characters.jpg?s=612x612&w=0&k=20&c=Ip9oCVO6ifO2d2JbInYBCpqIiQD1dLsbAk7CMoByRjI"]
  return (
    <>
      < div style={{ backgroundColor: "#C6F6D5"}} className=' border-black border m-4 rounded-3xl '>
  
            <Slides slides={s} className=""/>

         <div className='absolute top-0 h-[full] w-full justify-between items-center flex text-white'>  <button><FaCircleArrowRight/></button>
         <button><FaCircleArrowRight/></button>
         </div>
          
        
    </div>
    </>
  )
}

export default Slideshow
