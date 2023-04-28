import React, { forwardRef } from 'react';
import styled, { CSSProperties } from 'styled-components';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  backgroundColor?: CSSProperties['backgroundColor'];
  align?: CSSProperties['textAlign'];
  width?: CSSProperties['width'];
}

export const PaymentsInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Wrapper {...props}>
      <Input ref={ref} {...props} />
    </Wrapper>
  );
});

const Wrapper = styled.div<InputProps>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#ecebf1'};
  border-radius: 7px;
  padding: 12px;
  width: ${({ width, maxLength }) => width ?? `calc(${maxLength} * 44px)`};
`;

const Input = styled.input<InputProps>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#ecebf1'};
  border: none;
  outline: none;
  font-size: 16px;
  text-align: ${({ align }) => align};
`;
