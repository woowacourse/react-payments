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
  width: ${({ width }) => width};
  &:focus-within {
    box-shadow: 0 0 3px 1px #0064ff;
  }
`;

const Input = styled.input<InputProps>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#ecebf1'};
  border: none;
  outline: none;
  font-size: 16px;
  text-align: ${({ align }) => align};
`;
