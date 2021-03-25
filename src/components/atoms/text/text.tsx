import React from 'react';
import './text.scss';

interface TextProps {
  children: React.ReactNode
}

function Text({ children }: TextProps) {
  return (
    <p className="text">
      {children}
    </p>
  );
}

export default Text;
