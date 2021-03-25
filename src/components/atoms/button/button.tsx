import classNames from 'classnames';
import React from 'react';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  typeButton?: 'primary' | 'text'
}

function Button({ children, type,typeButton ,...rest }: ButtonProps) {
  return (
    <div className="button">
      <button className={
        classNames({
          "button__control": true,
          [`button__${typeButton}`]: !!typeButton
        })
       } type={type} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;
