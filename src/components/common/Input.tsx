import { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: string;
  isNumber?: boolean;
  isWrong?: boolean;
}

const StyledInput = styled.input<{ textAlign?: string; isWrong?: boolean }>`
  border: none;
  background-color: #ecebf1;
  border: ${({ isWrong }) => (isWrong ? '1px solid red' : '')};
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;

export default function Input({
  textAlign = 'baseline',
  isWrong,
  isNumber,
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

  return (
    <StyledInput
      isWrong={isWrong}
      textAlign={textAlign}
      inputMode={isNumber ? 'numeric' : 'text'}
      onInput={onInput}
      {...rest}
    />
  );
}
