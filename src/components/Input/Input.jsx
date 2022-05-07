import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

const StyledInput = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #525252;

  &::placeholder {
    letter-spacing: -0.02em;
  }

  &:disabled {
    background-color: transparent;
  }

  &.error {
    outline: 1px solid #ff9e9e;
    outline-offset: -1px;
    background-color: #ffc6c6;
  }
`;

export default Input;
