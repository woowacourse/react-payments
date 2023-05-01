import React, {
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from 'react';
import styled from 'styled-components';
import { setNextInputFocus } from '../../../utils/common';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: string;
  isNumber?: boolean;
  isWrong?: boolean;
  isPassword?: boolean;
  bgColor?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export default function Input({
  textAlign = 'baseline',
  isWrong,
  isNumber,
  bgColor,
  value,
  isPassword,
  inputRef,
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

  const convertEnterToTab = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setNextInputFocus(event.currentTarget.form);
    }
  };

  if (isPassword) {
    return (
      <StyledInput
        ref={inputRef}
        bgColor={bgColor}
        isWrong={isWrong}
        textAlign={textAlign}
        inputMode={isNumber ? 'numeric' : 'text'}
        onInput={onInput}
        onKeyDown={convertEnterToTab}
        isPassword={isPassword}
        {...rest}
      />
    );
  }

  return (
    <StyledInput
      ref={inputRef}
      bgColor={bgColor}
      isWrong={isWrong}
      textAlign={textAlign}
      onKeyDown={convertEnterToTab}
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
  bgColor?: string;
}>`
  border: none;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.inputGray};
  border: ${({ isWrong, theme }) =>
    isWrong ? `1px solid ${theme.colors.primaryRed}` : ''};
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};

  -webkit-text-security: ${({ isPassword }) => (isPassword ? 'disc' : '')};

  &::placeholder {
    font-size: 16px;
  }
`;
