import React from "react";
import image from '../images/doc8.png'
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <div className='mt-7 flex justify-between items-center gap-6'>
      <div>
        {/* <p className='text-gray-500'>Software Developer</p> */}
        <h2 className='text-7xl mb-3'>Hello I'm</h2>
        <h1 className='text-5xl mb-3 text-primaryColor'>Megdoud Mohamed El Hadj</h1>
        <p className="w-[78%] text-lg">
          I am a frontend developer with expertise in web design and
          development, particularly using React
        </p>
          {/* <button className="bg-transparent border-primaryColor text-black items-center rounded-2xl py-2 px-3 flex  gap-2">Download Cv <MdOutlineFileDownload size={30}/> </button> */}
           
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
