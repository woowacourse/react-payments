import styled from 'styled-components';
import {
  CardNumberInputValueType,
  CVCInputValueType,
  ExpirationDateInputValueType,
} from './types/inputFieldType';

const Card = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  background: #333333;
  margin: 40px 0px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const CardChip = styled.div`
  position: absolute;
  width: 36px;
  height: 22px;
  inset: 8px 0 0 12px;
  border-radius: 4px;
  background: #ddcd78;
`;

function CardPreview({
  cardNumberInputValue,
  expirationDateInputValue,
  CVCInputValue,
}: {
  cardNumberInputValue: Record<CardNumberInputValueType, string>;
  expirationDateInputValue: Record<ExpirationDateInputValueType, string>;
  CVCInputValue: Record<CVCInputValueType, string>;
}) {
  return (
    <Card>
      <CardChip />
    </Card>
  );
}
export default CardPreview;
