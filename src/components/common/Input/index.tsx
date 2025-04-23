import { StyledInputContainer } from './Input.styled';
import { InputProps } from './Input.types';

export const Input = ({
  value,
  minLength = 1,
  maxLength = 4,
  isValid = false,
  ...props
}: InputProps) => {
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
