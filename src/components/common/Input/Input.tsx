import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ backgroundColor, ...props }: InputProps) => {
  return <Styled.Input backgroundColor={backgroundColor} {...props} />;
};

const Styled = {
  Input: styled.input<InputProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  `,
};
