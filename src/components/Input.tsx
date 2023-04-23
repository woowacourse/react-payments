/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  maxLength?: number;
  resetStyle?: boolean;
  backgroundColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type { InputProps };

const Input = forwardRef<HTMLInputElement, InputProps>(({ backgroundColor, resetStyle = true, ...props }, ref) => (
  <StyledInput backgroundColor={backgroundColor} {...props} ref={ref} resetStyle={resetStyle} />
));

const StyledInput = styled.input<InputProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? null};
  ${({ resetStyle }) =>
    resetStyle &&
    css`
      border: none;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      input::-ms-clear {
        display: none;
      }
      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `}
`;

export default Input;
