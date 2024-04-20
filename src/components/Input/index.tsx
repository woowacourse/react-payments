import React, { ChangeEvent } from 'react';

import styles from './style.module.css';

export type InputValue = string | number | readonly string[] | undefined;
export type HandleInputValue = (
  value: InputValue,
  event: ChangeEvent<HTMLInputElement>,
) => InputValue;
// input의 change event에 대한 핸들러 중복을 막기 위해 props에서 onChange 제거

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error: boolean;
}

function Input(props: InputProps) {
  const { error, ...reset } = props;

  const className = `${styles.input} ${error ? styles.error : ''}`;

  return <input className={className} {...reset} />;
}

export default Input;
