import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@styles/theme';

export default function CardSpinner() {
  return (
    <Wrapper>
      <MoveBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 170px;
  height: 106px;
  border-radius: 10px;
  background-color: ${theme.colors.cardGray};
`;

const CardMoveAnimate = keyframes`
    0%{
        transform: translateX(85px);
    } 
    100%{
        transform: translateX(0px);
    } 
  `;

const MoveBox = styled.div`
  width: 85px;
  height: 106px;
  border-radius: 10px;
  background-color: ${theme.colors.cardBlack};
  animation: ${CardMoveAnimate} 0.8s infinite ease-in-out alternate;
`;
