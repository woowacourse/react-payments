import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, GRADATION, LAYOUT } from 'styles/theme';

const CARD_SIZE = {
  MEDIUM: css`
    font-size: 16px;
  `,
  LARGE: css`
    font-size: 24px;
  `,
};

const Container = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;

  margin: 1.875rem 0 2.5rem;

  ${({ cardSize }) => CARD_SIZE[cardSize] ?? CARD_SIZE.MEDIUM}
`;

const CardContainer = styled.div`
  position: relative;
  width: 16.75em;
  height: 10.6em;
  color: ${COLORS.white};
  border-radius: ${LAYOUT.BORDER_RADIUS};
  background-image: ${GRADATION['cornflowerBlue-affair-135deg']};
  box-shadow: 3px 25px 25px rgba(0, 0, 0, 0.15);
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
    border-radius: 0.25em;
  }

  &::after {
    content: '🐯';

    position: absolute;
    top: 0%;
    right: 15%;

    font-size: 5em;
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }
`;

const ComponyName = styled.div`
  position: absolute;
  top: 2%;
  right: 0%;
  font-size: 0.9em;
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
  font-size: 1em;
`;

const ExpireDate = styled.div`
  position: absolute;
  bottom: 22%;
  left: 5%;

  font-size: 0.9em;
  font-style: italic;
  opacity: 0.8;
`;

const CardNumber = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;

  font-size: 1em;
  font-style: italic;
`;

export { Container, CardContainer, ComponyName, UserName, ExpireDate, CardNumber };
