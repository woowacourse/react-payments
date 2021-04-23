import styled, { css } from 'styled-components';

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
  width: 24rem;
  height: calc(24rem * 0.63);
  font-size: 1.2rem;
  border-radius: 9px;
`;

export const CreditCardContainer = styled.div<CreditCardContainerProps>`
  background: ${({ cardColor }) => cardColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  padding: 1em;
  box-sizing: border-box;
  font-weight: 500;
  ${({ size }) => {
    console.log(size);
    return size === 'lg' ? lgSize : mdSize;
  }}

  .card-name {
    margin-bottom: 2em;
    height: 1.25em;
  }

  .ic-chip {
    background-color: #cbba64;
    width: 4em;
    height: calc(4em * 0.63);
    border-radius: 6px;
    margin-bottom: 0.725em;
  }

  .card-number {
    display: flex;
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
  }
`;
