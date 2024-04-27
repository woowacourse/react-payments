import React from 'react';

import styles from './style.module.css';

type InputType = 'text' | 'number';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name?: string;
  value: string;
  maxLength?: number;
  placeholder: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isError = false, ...rest }, ref) => {
    const className = `${styles.input} ${isError ? styles.error : ''}`;

    return <input ref={ref} className={className} {...rest} />;
  },
);

export default Input;
