import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, GRADATION, LAYOUT } from 'styles/theme';

const Container = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;

  margin: 1.875rem 0 2.5rem;
  transition: filter 0.3s ease;

  ${({ isComplete }) =>
    !isComplete &&
    css`
      filter: grayscale(1);
    `};
`;

const CardContainer = styled.div`
  position: relative;
  width: 16.75rem;
  height: 10.6rem;
  color: ${COLORS.white};
  border-radius: ${LAYOUT.BORDER_RADIUS}px;
  background-image: ${GRADATION['cornflowerBlue-affair-135deg']};
  box-shadow: 3px 1.563rem 1.563rem ${COLORS['black-25']};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 10%;
    right: 76%;
    top: 42%;
    bottom: 43%;
    transform: translateY(-50%);
    background-color: ${COLORS.laser};
    border-radius: 0.25rem;
  }

  &::after {
    content: '🐯';

    position: absolute;
    top: 5.5%;
    right: 12%;

    font-size: 4rem;
    text-shadow: 0 0.625rem 1.563rem rgba(0, 0, 0, 0.25);
  }
`;

const ComponyName = styled.div`
  position: absolute;
  top: 2%;
  right: 0%;
  font-size: 0.9rem;
  letter-spacing: 0.425rem;
  opacity: 0.8;

  transform: rotate(90deg) translateX(100%) translateY(100%);
  transform-origin: right;
`;

const UserName = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;

  font-weight: bold;
  font-size: 0.8rem;
`;

const ExpireDate = styled.div`
  position: absolute;
  bottom: 22%;
  left: 5%;

  font-size: 0.9rem;
  font-style: italic;
  opacity: 0.8;
`;

const CardNumber = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;

  font-size: 1rem;
  font-style: italic;
`;

export { Container, CardContainer, ComponyName, UserName, ExpireDate, CardNumber };
