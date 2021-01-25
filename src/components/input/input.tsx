import React from 'react';
import './input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

function Input({placeholder = '',...rest}:InputProps) {
  return (
    <div className="input">
      <input 
        className="input__control"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;
