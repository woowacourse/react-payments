import React, {
  ChangeEvent,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import styles from './style.module.css';

export type InputValue = string | number | readonly string[] | undefined;
export type HandleInputValue = (
  value: InputValue,
  event: ChangeEvent<HTMLInputElement>,
) => InputValue;
// input의 change event에 대한 핸들러 중복을 막기 위해 props에서 onChange 제거

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error: boolean;
  isFocus?: boolean;
}

function Input(props: InputProps) {
  const { error, label, isFocus, ...reset } = props;
  const inputId = `input-${useId()}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const className = useMemo(() => `${error ? styles.error : ''}`, [error]);

  useLayoutEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  return (
    <>
      <label className="scr-only" htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} className={className} ref={inputRef} {...reset} />
    </>
  );
}

export default Input;
