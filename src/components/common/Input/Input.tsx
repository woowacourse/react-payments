import { useState } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export default function Input(props: InputProps) {
  const { onChange, ...rest } = props;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <input
      className={`${styles.customInput} ${isFocus ? styles.isFocus : ''} ${props.isError ? styles.isError : ''} `}
      {...rest}
      onFocus={() => setIsFocus(true)}
      onBlur={(e) => {
        setIsFocus(false);
        if (props.onBlur) {
          props.onBlur(e);
        }
      }}
      onChange={onChange}
    />
  );
}
