import React, { useState } from "react";
import W3D from "../pages/W3D";
import AA2 from "../pages/AA2";
import RI from "../pages/RI";
import SMA from "../pages/SMA";
import WM from "../pages/WM";
import ED from "../pages/ED";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("W3D");

  // Mapping of category names to their corresponding components
  const categories = [
    { name: "W3D", component: <W3D /> },
    { name: "AA2", component: <AA2 /> },
    { name: "SMA", component: <SMA /> },
    { name: "WM", component: <WM /> },
    { name: "ED", component: <ED /> },
    { name: "RI", component: <RI /> },
  ];

  return (
    <div className='mt-10'>
      {/* Categories Container */}
      <div className='bg-slate-200 rounded-xl border border-gray-300 w-full h-12 flex justify-between items-center shadow-md'>
        {categories.map((element, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(element.name)} // Set the clicked category
            className={`cursor-pointer text-sm font-bold border-r-2 border-gray-400 flex-1 text-center h-full flex items-center justify-center last:border-r-0 hover:bg-gray-300 transition-colors ${
              selectedCategory === element.name ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {element.name}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div>
        {/* Show content of the selected category, if any */}
        {selectedCategory && (
          <div className='mt-4'>
            {categories.find((cat) => cat.name === selectedCategory)?.component}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
