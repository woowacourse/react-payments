import { ComponentProps } from 'react';

import { StyledInputContainer } from './Input.styled';

// TODO : onChange 타입 정의
export type Props = {
  /**
   * 입력 상태 타입을 나타냅니다.
   */
  value?: string;
  /**
   * 입력 전 보여줄 임시 문구입니다.
   */
  isValid: boolean;
} & ComponentProps<'input'>;

export const Input = ({
  value = '',
  type = 'text',
  minLength = 1,
  maxLength = 4,
  isValid = false,
  ...props
}: Props) => {
  return (
    <StyledInputContainer
      value={value}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      isValid={isValid}
      {...props}
    />
  );
};
