import React from 'react';

import Categories from './Categories';

// Component to load your models
const Project = () => {
  return (
    <div className='mt-10'>
      <h1 className='font-bold text-5xl text-primaryColor'>My project</h1>
      <Categories/>
      {/* Render two Blender components with the same model */}
    </div>
  );
};

export default Project;
