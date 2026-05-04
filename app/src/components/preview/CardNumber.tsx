import styled from '@emotion/styled';
import { useCardContext } from '../../hooks/useCardContext';

export function CardNumber() {
  const { cardNumber } = useCardContext();

  return (
    <CardNumberContainer>
      <span>{cardNumber[0]}</span>
      <span>{cardNumber[1]}</span>
      <span className="secret">{'●'.repeat(cardNumber[2].length)}</span>
      <span className="secret">{'●'.repeat(cardNumber[3].length)}</span>
    </CardNumberContainer>
  );
}

const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
  height: 1.25rem;
  span {
    flex: 4 1;
    letter-spacing: 2px;
  }
  .secret {
    font-size: 6px;
  }
`;
