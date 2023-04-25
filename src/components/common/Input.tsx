import { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: string;
  isNumber?: boolean;
  isWrong?: boolean;
  isPassword?: boolean;
}

export default function Input({
  textAlign = 'baseline',
  isWrong,
  isNumber,
  value,
  isPassword,
  ...rest
}: InputProps) {
  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget) return;

    if (isNumber) {
      event.currentTarget.value = event.currentTarget.value.replace(
        /[^0-9]/g,
        ''
      );
    }
  };

  if (isPassword) {
    return (
      <StyledInput
        isWrong={isWrong}
        textAlign={textAlign}
        inputMode={isNumber ? 'numeric' : 'text'}
        onInput={onInput}
        isPassword={isPassword}
        {...rest}
      />
    );
  }

  return (
    <StyledInput
      isWrong={isWrong}
      textAlign={textAlign}
      inputMode={isNumber ? 'numeric' : 'text'}
      onInput={onInput}
      value={value}
      {...rest}
    />
  );
}

const StyledInput = styled.input<{
  textAlign?: string;
  isWrong?: boolean;
  isPassword?: boolean;
}>`
  border: none;
  background-color: #ecebf1;
  border: ${({ isWrong }) => (isWrong ? '1px solid #ff0033' : '')};
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};

  -webkit-text-security: ${({ isPassword }) => (isPassword ? 'disc' : '')};

  &::placeholder {
    font-size: 16px;
  }
`;
