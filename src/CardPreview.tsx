import styled from 'styled-components';
import {
  CardNumberInputValueType,
  CVCInputValueType,
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

const CardNumberWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CardInfoText = styled.p`
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: white;
  width: 34px;
  min-height: 20px;
  border-bottom: 1px solid white;
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
        <CardNumberWrapper>
          <CardInfoText>{cardNumberInputValue.cardNumberPart1}</CardInfoText>
          <CardInfoText>{cardNumberInputValue.cardNumberPart2}</CardInfoText>
          <CardInfoText>{cardNumberInputValue.cardNumberPart3}</CardInfoText>
          <CardInfoText>{cardNumberInputValue.cardNumberPart4}</CardInfoText>
        </CardNumberWrapper>
        <CardInfoText>
          {expirationDateInputValue.expirationDatePart1}/
          {expirationDateInputValue.expirationDatePart2}
        </CardInfoText>
      </CardInfoBox>
    </Card>
  );
}
export default CardPreview;
