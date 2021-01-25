import React from 'react';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, type ,...rest }: ButtonProps) {
  return (
    <div className="button">
      <button className="button__control" type={type} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;
