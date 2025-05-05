import styled from 'styled-components';
import CardInfoBox from './CardInfoBox/CardInfoBox';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  ExpirationDateInputType,
} from '../../../config/inputField';
import { CardType } from '../../../config/card';
import {
  CARD_ISSUER_COLORS,
  DEFAULT_CARD_COLOR,
} from '../../../constants/cardIssuerColors';

interface CardPreviewProps {
  cardNumberInputValue: Record<CardNumberInputType, string>;
  expirationDateInputValue: Record<ExpirationDateInputType, string>;
  cardType: CardType;
  cardIssuer: CardIssuerSelectorType | null;
}

function CardPreview({
  cardNumberInputValue,
  expirationDateInputValue,
  cardType,
  cardIssuer,
}: CardPreviewProps) {
  return (
    <Card
      $cardBackground={
        cardIssuer ? CARD_ISSUER_COLORS[cardIssuer] : DEFAULT_CARD_COLOR
      }
    >
      <CardChip />
      <CardTypeBadge src={`./img/${cardType}.png`} $cardType={cardType} />
      <CardInfoBox
        cardNumber={cardNumberInputValue}
        expirationDate={expirationDateInputValue}
      />
    </Card>
  );
}

const Card = styled.div<{ $cardBackground: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 44px;
  margin: 40px 0px;
  width: 212px;
  height: 132px;
  min-height: 132px;
  background: ${(props) => props.$cardBackground};
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

const CardTypeBadge = styled.img<{ $cardType: CardType }>`
  visibility: ${(props) => (props.$cardType === null ? 'hidden' : 'visible')};
  position: absolute;
  width: 36px;
  height: 22px;
  top: 8px;
  right: 12px;
`;

export default CardPreview;
