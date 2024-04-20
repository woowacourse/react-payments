import React, { ChangeEvent, useId } from 'react';

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
}

function Input(props: InputProps) {
  const { error, label, ...reset } = props;
  const inputId = `input-${useId()}`;

  const className = `${styles.input} ${error ? styles.error : ''}`;

  return (
    <>
      <label className="scr-only" htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} className={className} {...reset} />
    </>
  );
}

export default Input;
