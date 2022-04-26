import React from 'react';
import styled from 'styled-components';

const InputBoxStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export const InputBox = ({ children }) => {
  return <InputBoxStyle>{children}</InputBoxStyle>;
};
