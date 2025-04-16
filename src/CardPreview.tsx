import styled from 'styled-components';
import {
  CardNumberInputValueType,
  ExpirationDateInputValueType,
} from './types/inputFieldType';

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 44px;
  margin: 40px 0px;
  width: 212px;
  height: 132px;
  background: #333333;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  box-sizing: border-box;
`;

const CardChip = styled.div`
  position: absolute;
  width: 36px;
  height: 22px;
  inset: 8px 0 0 12px;
  border-radius: 4px;
  background: #ddcd78;
`;

const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

function CardPreview({
  cardNumberInputValue,
  expirationDateInputValue,
}: {
  cardNumberInputValue: Record<CardNumberInputValueType, string>;
  expirationDateInputValue: Record<ExpirationDateInputValueType, string>;
}) {
  return (
    <Card>
      <CardChip />
      <CardInfoBox>
        <CardNumberRow>
          <CardNumberWrapper>
            <CardInfoText>{cardNumberInputValue.cardNumberPart1}</CardInfoText>
          </CardNumberWrapper>
          <CardNumberWrapper>
            <CardInfoText>{cardNumberInputValue.cardNumberPart2}</CardInfoText>
          </CardNumberWrapper>
          <CardNumberWrapper>
            {Array.from(
              { length: cardNumberInputValue.cardNumberPart3.length },
              () => (
                <CardNumberMask />
              )
            )}
          </CardNumberWrapper>
          <CardNumberWrapper>
            {Array.from(
              { length: cardNumberInputValue.cardNumberPart4.length },
              () => (
                <CardNumberMask />
              )
            )}
          </CardNumberWrapper>
        </CardNumberRow>
        <CardNumberWrapper>
          <CardInfoText>
            {expirationDateInputValue.expirationDatePart1}/
            {expirationDateInputValue.expirationDatePart2}
          </CardInfoText>
        </CardNumberWrapper>
      </CardInfoBox>
    </Card>
  );
}
export default CardPreview;
