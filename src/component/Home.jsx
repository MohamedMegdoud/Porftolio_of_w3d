import React from "react";
import image from '../images/images (1).jpeg'
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <div className='mt-24 flex justify-between items-center gap-6'>
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
        <img src={image} alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default Home;
