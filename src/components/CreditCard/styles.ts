import styled from 'styled-components';
import { CARD } from '../../constants/style';

interface CreditCardContainerProps {
  cardColor: string;
}

export const CreditCardContainer = styled.div<CreditCardContainerProps>`
  width: ${CARD.WIDTH};
  height: ${CARD.HEIGHT};
  background: ${({ cardColor }) => cardColor};
  border-radius: ${CARD.BORDER_RADIUS};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  padding: 1rem 1.25rem;
  box-sizing: border-box;
  font-weight: 500;

  .card-name {
    margin-bottom: 2rem;
  }

  .ic-chip {
    background-color: #cbba64;
    width: 4rem;
    height: calc(4rem * 0.63);
    border-radius: 6px;
    margin-bottom: 0.725rem;
  }

  .card-number {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    letter-spacing: 1px;
    padding: 0 0.875rem;
    margin-bottom: 0.25rem;

    span {
      width: 100%;
      text-align: center;
    }
  }

  .info-wrapper {
    font-size: 1.125rem;
    padding: 0 0.725rem;
  }
`;
