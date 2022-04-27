import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 45px;
`;

export default function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}
