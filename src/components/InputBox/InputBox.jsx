import React from 'react';
import styled from 'styled-components';

const InputBox = ({ children, ...rest }) => {
  return <StyledInputBox {...rest}>{children}</StyledInputBox>;
};

const StyledInputBox = styled.div`
  display: inline-flex;
  width: fit-content;
  height: 47px;
  align-items: center;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export default InputBox;
