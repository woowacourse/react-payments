/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './style';
import { InputProps, InputValueType } from './type';

function Input<T extends InputValueType>({
  type,
  value,
  width,
  textAlign,
  placeholder,
  maxLength,
  onChange,
  onClick,
  background,
  underline = false,
}: InputProps<T>) {
  return (
    <S.Input
      background={background}
      underline={underline}
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
