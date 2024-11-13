import React from 'react';

const Header = () => {
  return (
    <div className='fixed w-full top-0 left-0 z-50 bg-white'>
      <div className='container mx-auto flex justify-between text-sm py-4'>
        <div className="w-44 cursor-pointer font-bold text-xl">
          Ayoub <span className='text-primaryColor text-3xl'>.</span>
        </div>
        <div className="menu">
          <ul className='flex justify-between gap-4'>
            {['Home', 'Services', 'Project', 'Contact'].map((item) => (
              <li key={item} className='py-1 cursor-pointer group'>
                <p className='group-hover:text-primaryColor text-base'>{item}</p>
                <hr className="mt-1 border-none outline-none h-0.5 w-full m-auto hidden group-hover:block bg-primaryColor" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
