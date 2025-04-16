import { ComponentProps } from 'react';

import { StyledInputContainer } from './Input.styled';

// TODO : onChange 타입 정의
export type Props = {
  /**
   * Represents the input state type.
   */
  value?: string;
  /**
   * Indicates whether the input is valid.
   */
  isValid: boolean;
} & ComponentProps<'input'>;

export const Input = ({
  value = '',
  minLength = 1,
  maxLength = 4,
  isValid = false,
  ...props
}: Props) => {
  return (
    <StyledInputContainer
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      isValid={isValid}
      {...props}
    />
  );
};
