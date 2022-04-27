import React from 'react';
import styled from 'styled-components';

const CircleStyled = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

export default function Circle({ size, color }) {
  return <CircleStyled size={size} color={color} />;
}
