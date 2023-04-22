/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  resetStyle?: boolean;
  backgroundColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>(({ backgroundColor, resetStyle = true, ...props }, ref) => (
  <StyledInput backgroundColor={backgroundColor} {...props} ref={ref} resetStyle={resetStyle} />
));

const StyledInput = styled.input<Props>`
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
