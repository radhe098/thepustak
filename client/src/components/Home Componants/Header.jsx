import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { MdOutlineDriveFolderUpload } from "react-icons/md";

const Header = () => {
   const navigateTo = useNavigate();
  const gotoprofile = () =>{
   navigateTo('/profile')
  }
  const gotoUpload = () =>{
   navigateTo('/upload')
  }
  return (
    <>
      <div  className="h-16 w-[100%] text-black font-serif border-black border-b-2 flex bg-yellow-100 text-3xl justify-between pr-5 pl-5 items-center">
        <h1 className="text-3xl ml-3">The Pustak</h1>

        <div>
          <div className="flex items-center justify-evenly gap-8">
            <div className="grid place-items-center cursor-pointer">
              <h3 onClick={()=>{
                var elem = document.getElementById("ele");
                elem.scrollIntoView();
                }} >Library</h3>
            </div>
            <div className="grid place-items-center cursor-pointer">
             
                <MdOutlineDriveFolderUpload onClick={gotoUpload} className="mr-2" />

            </div>
            <div className="grid place-items-center cursor-pointer">
             
                <CgProfile onClick={gotoprofile} className="mr-2" />

            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Header;
