import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div  className="h-16 w-[100%] text-black font-serif border-black border-b-2 flex bg-yellow-100 text-3xl justify-between pr-5 pl-5 items-center">
        <h1 className="text-3xl ml-3">The Pustak</h1>

        <div>
          <div className="flex items-center justify-evenly gap-8">
            <div className="grid place-items-center cursor-pointer">
              <h3>Library</h3>
            </div>
            <div className="grid place-items-center cursor-pointer">
              <Link to="/profile">
                <FaBook className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='h-16 w-[100%] text-black font-serif border-black border-b-4 flex text-3xl justify-between mr-2 items-center bg-gradient-to-br from-white to-blue-300'>
        <h1 className='text-3xl ml-3'>The Pustak</h1>
        <h1 className=''>Library</h1>
       <Link to ='/profile'><FaBook className='mr-2'/></Link>
        
       </div> */}
    </>
  );
};

export default Header;
