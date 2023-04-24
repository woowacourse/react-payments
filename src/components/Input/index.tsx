import {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import styles from './input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  align?: 'left' | 'center' | 'right';
}

export interface Focus {
  focus: () => void;
}

const Input = forwardRef<Focus, Props>(({ align = 'left', ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current?.focus();
        },
      };
    },
    [],
  );

  return (
    <input
      className={`${styles.input} ${styles[align]}`}
      {...props}
      ref={inputRef}
    />
  );
});

export default Input;
