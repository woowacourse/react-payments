import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';

interface CreditCardContainerProps {
  cardColor: string;
  size?: 'md' | 'lg';
}

export const mdSize = css`
  width: 16rem;
  height: calc(16rem * 0.63);
  font-size: 0.8rem;
  border-radius: 6px;
`;

const lgSize = css`
  width: 20rem;
  height: calc(20rem * 0.63);
  font-size: 1rem;
  border-radius: 7px;
`;

export const CreditCardContainer = styled.div<CreditCardContainerProps>`
  background: ${({ cardColor }) => cardColor || PALETTE.GRAY_1};
  box-shadow: 3px 3px 5px ${PALETTE.TRANSLUCENT_BLACK_3};
  padding: 1em;
  box-sizing: border-box;
  font-weight: 500;
  ${({ size }) => (size === 'lg' ? lgSize : mdSize)}

  .card-name {
    margin-bottom: 2em;
    height: 1.25em;
  }

  .ic-chip {
    background-color: ${PALETTE.DARK_YELLOW};
    width: 4em;
    height: calc(4em * 0.63);
    border-radius: 6px;
    margin-bottom: 0.725em;
  }

  .card-number {
    display: flex;
    height: 2em;
    justify-content: space-between;
    font-size: 1.25em;
    letter-spacing: 0.05em;
    padding: 0 0.5em;
    margin-bottom: 0.125em;

    span {
      width: 100%;
      text-align: center;
    }
  }

  .info-wrapper {
    font-size: 1.125em;
    padding: 0 0.725em;

    .owner-name {
      overflow-x: hidden;
      max-width: 10em;
    }
  }
`;
