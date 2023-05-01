/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, HTMLAttributes } from 'react';
import * as S from './style';

export interface InputProps<T> extends HTMLAttributes<HTMLInputElement> {
  type: string;
  value: T;
  name?: string;
  width: string;
  textAlign: 'center' | 'start';
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

type InputValueType = string | number | readonly string[] | undefined;

function Input<T extends InputValueType>({
  type,
  value,
  name,
  width,
  textAlign,
  placeholder,
  onChange,
  onClick,
}: InputProps<T>) {
  return (
    <S.Input
      width={width}
      textAlign={textAlign}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
    />
  );
}
export default Input;

Input.defaultProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => {},
};
