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

  text-align: right;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #04c09e;
`;

export default SubmitButton;
