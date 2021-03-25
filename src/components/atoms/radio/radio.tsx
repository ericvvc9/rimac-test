import React from 'react';
import './radio.scss';

interface Props {
  text:string;
}

const Radio: React.FC<Props>  = ({text,...rest}) => {
  return (
    <div className="radio">
      <div className="radio__form">
        <input {...rest} type="radio" />
      </div>
      <div className="radio__text">
        {text}
      </div>
    </div>
  );
}

export default Radio;
