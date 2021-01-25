import React from 'react';
import { FieldMetaState } from 'react-final-form';
import './select-input.scss';

interface Option {
  label:string;
  value:string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  meta?:FieldMetaState<any>;
  options: Array<Option>
}

function SelectInput({placeholder = '',meta,options,children,...rest}:SelectInputProps) {
  return (
    <div className="select-input">
      <div className="select-input__content">
        <select className="select-input__combo" {...rest}>
          {options.map((option) => {
            return <option value={option.value}>
              {option.label}
            </option>
          })}
        </select>
        <div className="select-input__input">
          {children}
        </div>
      </div>
      {meta?.error && meta.touched && <span className="input__alert">{meta.error}</span>}
    </div>
  );
}

export default SelectInput;
