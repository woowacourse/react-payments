import { CustomInputProps } from '../type/types';
import * as S from './customInput.styles';

export default function CustomInput({ type, placeholder, name, onChange, maxLength, error }: CustomInputProps) {
  return (
    <S.CustomInput
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      maxLength={maxLength}
      error={error}
    />
  );
}
