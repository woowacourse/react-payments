import React from 'react';
import styled from 'styled-components';

export default function CardBox({ children, isSmall, color }) {
  return (
    <Styled.CardBox isSmall={isSmall} color={color}>
      {children}
    </Styled.CardBox>
  );
}

const Styled = {
  CardBox: styled.div(
    ({ isSmall, color }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${isSmall ? '208px' : '330px'};
  height: ${isSmall ? '130px' : '206px'};
  padding: ${isSmall ? '10px' : '16px'};
  font-size: ${isSmall ? '14px' : '22px'};
  margin-bottom: 5px;
  color: #fff;

  background: ${color};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  `,
  ),
};
