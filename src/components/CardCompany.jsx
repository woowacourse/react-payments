import React from 'react';
import Circle from './Circle';
import styled from 'styled-components';

const CardCompanyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  height: 105px;
  cursor: pointer;
`;

const CardCompanyName = styled.p`
  margin: 10px 0;
  color: ${({ selected }) => (selected ? '#000000' : '#5e5e5e')};
  font-size: 12px;
  letter-spacing: -0.085rem;
`;

export default function CardCompany({ color, children, onClick, selected }) {
  return (
    <CardCompanyStyled onClick={onClick}>
      <Circle size="37px" color={color} />
      <CardCompanyName selected={selected}>{children}</CardCompanyName>
    </CardCompanyStyled>
  );
}
