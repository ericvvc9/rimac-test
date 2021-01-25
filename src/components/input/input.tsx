import React from 'react';
import './input.scss';

function Input({placeholder = ''}) {
  return (
    <div className="input">
      <input 
        className="input__control"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
