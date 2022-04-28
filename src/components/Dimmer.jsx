import React from 'react';
import styled from 'styled-components';

const DimmerStyled = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export default function Dimmer({ onClick, show }) {
  return <DimmerStyled onClick={onClick} show={show}></DimmerStyled>;
}
