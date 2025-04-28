import styled from 'styled-components';
import { CARD_BANK, CardBankType, CardType } from '../config/card';
import {
  CardNumberInputType,
  ExpirationDateInputType,
} from '../config/inputField';
import CardInfoBox from './CardInfoBox';
import { DropdownOptionType } from '../../../../types/dropdown';

interface CardPreviewProps {
  cardNumberInputValue: Record<CardNumberInputType, string>;
  expirationDateInputValue: Record<ExpirationDateInputType, string>;
  cardType: CardType | null;
  cardBank: DropdownOptionType | null;
}

function CardPreview({
  cardNumberInputValue,
  expirationDateInputValue,
  cardType,
  cardBank,
}: CardPreviewProps) {
  return (
    <Card $cardBank={cardBank}>
      <CardChip />
      <CardTypeBadge src={`./img/${cardType}.png`} $cardType={cardType} />
      <CardInfoBox
        cardNumber={cardNumberInputValue}
        expirationDate={expirationDateInputValue}
      />
    </Card>
  );
}

const Card = styled.div<{ $cardBank: DropdownOptionType | null }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 44px;
  margin: 40px 0px;
  width: 212px;
  height: 132px;
  background: ${(props) =>
    props.$cardBank
      ? CARD_BANK[props.$cardBank.value as CardBankType].color
      : '#333333'};
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  box-sizing: border-box;
`;

const CardChip = styled.div`
  position: absolute;
  width: 36px;
  height: 22px;
  top: 8px;
  left: 12px;
  border-radius: 4px;
  background: #ddcd78;
`;

const CardTypeBadge = styled.img<{ $cardType: CardType | null }>`
  visibility: ${(props) => (props.$cardType === null ? 'hidden' : 'visible')};
  position: absolute;
  width: 36px;
  height: 22px;
  top: 8px;
  right: 12px;
`;

export default CardPreview;
