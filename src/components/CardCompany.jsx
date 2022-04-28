import React from 'react';
import Circle from './Circle';
import styled from 'styled-components';

const CardCompanyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 105px;
`;

const CardCompanyName = styled.p`
  margin: 10px 0;
  font-size: 12px;
  letter-spacing: -0.085rem;
`;

export default function CardCompany({ color, children }) {
  return (
    <CardCompanyStyled>
      <Circle size="37px" color={color} />
      <CardCompanyName>{children}</CardCompanyName>
    </CardCompanyStyled>
  );
}
