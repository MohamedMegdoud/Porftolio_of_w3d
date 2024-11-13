// src/components/CodeBlock.js
import React, { useState } from "react";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

const CodeBlock = ({ code, Title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div>
      <h1 className='font-medium text-3xl text-primaryColor my-8'>{Title}</h1>
      <div className='relative p-4 border rounded-md bg-gray-100'>
        <button
          onClick={handleCopy}
          className='absolute top-2 right-2 bg-blue-500 text-white rounded px-2 py-1 text-sm'
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre className='overflow-x-auto'>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
