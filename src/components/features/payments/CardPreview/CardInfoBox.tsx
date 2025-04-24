import styled from 'styled-components';
import {
  CardNumberInputType,
  ExpirationDateInputType,
} from '../config/inputField';

interface CardInfoBoxProps {
  cardNumber: Record<CardNumberInputType, string>;
  expirationDate: Record<ExpirationDateInputType, string>;
}

function CardInfoBox({ cardNumber, expirationDate }: CardInfoBoxProps) {
  return (
    <CardInfoBoxContainer>
      <CardNumberRow>
        <CardNumberWrapper>
          <CardInfoText>{cardNumber.cardNumberPart1}</CardInfoText>
        </CardNumberWrapper>
        <CardNumberWrapper>
          <CardInfoText>{cardNumber.cardNumberPart2}</CardInfoText>
        </CardNumberWrapper>
        <CardNumberWrapper>
          {Array.from(
            { length: cardNumber.cardNumberPart3.length },
            (_, index) => (
              <CardNumberMask key={index} />
            )
          )}
        </CardNumberWrapper>
        <CardNumberWrapper>
          {Array.from(
            { length: cardNumber.cardNumberPart4.length },
            (_, index) => (
              <CardNumberMask key={index} />
            )
          )}
        </CardNumberWrapper>
      </CardNumberRow>
      <CardNumberWrapper>
        <CardInfoText>
          {expirationDate.month}/{expirationDate.year}
        </CardInfoText>
      </CardNumberWrapper>
    </CardInfoBoxContainer>
  );
}

const CardInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: inherit;
`;

const CardNumberRow = styled.div`
  display: flex;
  gap: 10px;
`;

const CardNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 34px;
  min-height: 20px;
  border-bottom: 1px solid white;
`;

const CardInfoText = styled.p`
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  vertical-align: center;
  color: white;
`;

const CardNumberMask = styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
`;

export default CardInfoBox;
