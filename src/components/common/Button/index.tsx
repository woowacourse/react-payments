/* eslint-disable react/button-has-type */
import React from 'react';

import styles from './style.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Button({ type = 'button', onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
