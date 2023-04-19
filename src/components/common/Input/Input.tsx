import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ backgroundColor, ...props }, ref) => {
  return <Styled.Input backgroundColor={backgroundColor} ref={ref} {...props} />;
});

const Styled = {
  Input: styled.input<InputProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  `,
};
