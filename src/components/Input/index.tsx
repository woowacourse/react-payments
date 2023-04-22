/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './style';

export type InputProps<T> = {
  type: 'string' | 'number' | 'date' | 'datetime' | 'password';
  value: T;
  width: string;
  textAlign: 'center' | 'start';
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

type InputValueType = string | number | readonly string[] | undefined;

function Input<T extends InputValueType>({
  type,
  value,
  width,
  textAlign,
  placeholder,
  maxLength,
  onChange,
  onClick,
}: InputProps<T>) {
  return (
    <S.Input
      width={width}
      textAlign={textAlign}
      type={type}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
}
export default Input;

Input.defaultProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
};
