import React from 'react';
import { FieldMetaState } from 'react-final-form';
import './input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  meta?:FieldMetaState<any>
}

function Input({placeholder = '',meta,...rest}:InputProps) {
  return (
    <div className="input">
      <input 
        className="input__control"
        placeholder={placeholder}
        {...rest}
      />
      {meta?.error && meta.touched && <span className="input__alert">{meta.error}</span>}
    </div>
  );
}

export default Input;
