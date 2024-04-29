import { forwardRef, useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, onFocus, onBlur, onChange, ...rest }, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  const inputStyle = classNames(styles.customInput, { [styles.isFocus]: isFocus }, { [styles.isError]: isError });

  return (
    <input
      className={inputStyle}
      ref={ref}
      {...rest}
      onFocus={(e) => {
        if (onFocus) onFocus(e);
        setIsFocus(true);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (onBlur) onBlur(e);
      }}
      onChange={onChange}
    />
  );
});

export default Input;
