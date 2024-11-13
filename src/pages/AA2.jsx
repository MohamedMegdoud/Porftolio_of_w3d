import React from "react";
import CodeBlock from "../component/CodeBlock";

const AA2 = () => {
  const codeSnippet = `
  // This is a  code snippet
  import React from 'react';

  const SampleComponent = () => {
    return <div>Hello, World!</div>;
  };

  export default SampleComponent;
  `;
  const codeSnippet1 = `
  // This is a  my code snippet
  import React from 'react';

  const SampleComponent = () => {
    return <div>Hello, World!</div>;
  };

  export default SampleComponent;
  `;
  return (
    <div>
      <CodeBlock code={codeSnippet} Title="Tp1 (exo1)"/>
      <CodeBlock code={codeSnippet1} Title="Tp1 (exo2)"/>

    </div>
  );
};

export default AA2;
