import styled from 'styled-components';
import { CardType } from '../../config/card';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  ExpirationDateInputType,
} from '../../config/inputField';
import CardInfoBox from './CardInfoBox/CardInfoBox';

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
  const issuerBackground = {
    BC카드: '#F04651',
    신한카드: '#0046FF',
    카카오뱅크: '#FFE600',
    현대카드: '#000000',
    우리카드: '#007BC8',
    롯데카드: '#ED1C24',
    하나카드: '#009490',
    국민카드: '#6A6056',
  };

  return (
    <Card
      $cardBackground={cardIssuer ? issuerBackground[cardIssuer] : '#333333'}
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
