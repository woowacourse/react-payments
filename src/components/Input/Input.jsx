import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ variant, ...props }, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

const StyledInput = styled.input`
  background-color: transparent;
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

  &.error {
    outline: 1px solid #ff9e9e;
    outline-offset: -1px;
  }

  &.input-expired-date {
    width: 67px;
  }

  &.input-owner {
    width: 331px;
  }

  &.input-cvc {
    width: 84px;
  }

  &.input-password {
    width: 43px;
  }
`;

export default Input;
