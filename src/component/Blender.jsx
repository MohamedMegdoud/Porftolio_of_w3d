import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url); // Load the model using the URL

  // Debugging: log the scene to the console
  console.log('Loaded Scene:', scene);

  // Return the model if loaded, otherwise display an error message
  return scene ? <primitive object={scene} scale={0.5} /> : <p>Error loading model...</p>;
}

const Blender = ({ tp, url }) => {
  return (
    <div className="mt-8 p-6 rounded-lg border border-gray-300 bg-gray-100 shadow-lg">
      <h1 className="text-xl font-semibold mb-4">{tp}</h1> {/* Correctly render the tp prop */}
      <div className="w-[80%] h-80">
        <Canvas>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} />
          <Model url={url} /> {/* Pass the URL prop to the Model component */}
          <OrbitControls /> {/* Allows for mouse interaction */}
        </Canvas>
      </div>
    </div>
  );
};

export default Blender;
