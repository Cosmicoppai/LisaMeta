import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre>
      <code>
        {code.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < code.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </code>
    </pre>
  );
};

export default CodeBlock;