import React from 'react'
import Blender from '../component/Blender'; // Ensure this path is correct
import url2 from '..//model/tabla_chair1.glb'; // Ensure this path is correct
import ulr1 from '../model/boba_thing_animated.glb'; // Ensure this path is correct
const W3D = () => {
  return (
    <div>
         <Blender tp="Tp1" url={url2} />
         <Blender tp="Tp2" url={ulr1} />
    </div>
  )
}

export default W3D