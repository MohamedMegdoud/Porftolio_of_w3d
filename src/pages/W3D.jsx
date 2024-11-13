import React from 'react'
import Blender from '../component/Blender'
import url1 from '../component/tabla_chair.glb'; // Ensure this path is correct
import url2 from '../component/tabla_chair1.glb'; // Ensure this path is correct
const W3D = () => {
  return (
    <div>
         <Blender tp="Tp1" url={url2} />
         <Blender tp="Tp2" url={url1} />
    </div>
  )
}

export default W3D