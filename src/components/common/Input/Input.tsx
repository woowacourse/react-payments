import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  backgroundColor?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ backgroundColor, ...props }, ref) => {
    return <Styled.Input backgroundColor={backgroundColor} ref={ref} {...props} />;
  }
);

const Styled = {
  Input: styled.input<InputProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  `,
};
