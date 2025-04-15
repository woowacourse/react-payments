import { ComponentProps } from 'react';
import { StyledInputContainer } from './Input.styled';

// TODO : onChange 타입 정의
export type Props = {
  /**
   * 입력 상태 타입을 나타냅니다.
   */
  value?: number;
  /**
   * 입력 전 보여줄 임시 문구입니다.
   */
  placeholder: string;
  /**
   * 입력 전 보여줄 임시 문구입니다.
   */
  isValid: boolean;
} & ComponentProps<'input'>;

export const Input = ({
  value = 0,
  type = 'text',
  onChange,
  disabled = false,
  minLength = 1,
  maxLength = 4,
  placeholder,
  isValid = false,
  ...props
}: Props) => {
  return (
    <StyledInputContainer
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      isValid={isValid}
      {...props}
    />
  );
};
