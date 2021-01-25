import React, { useState } from 'react';
import './checkbox.scss';

interface Props {
  text: string;
  name: string;
  checked: boolean;
  onChange: (event:any) => void;
}

const Checkbox: React.FC<Props> = ({ text, name, checked ,onChange}) => {
  return (
    <div className="checkbox">
      <div className="checkbox__form">
        <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
      </div>
      <div className="checkbox__text">
        {text}
      </div>
    </div>
  );
}

export default Checkbox;
