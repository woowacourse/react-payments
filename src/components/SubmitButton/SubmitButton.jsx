import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  position: absolute;
  width: 51px;
  height: 34px;
  right: 25px;
  bottom: 16px;

  text-align: right;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #04c09e;
`;

export default SubmitButton;
