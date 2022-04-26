import React from 'react';
import styled from 'styled-components';

const InputBoxStyle = styled.div`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export const InputBox = ({ children }) => {
  return <InputBoxStyle>{children}</InputBoxStyle>;
};
