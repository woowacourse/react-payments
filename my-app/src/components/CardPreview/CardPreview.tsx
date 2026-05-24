import CardBrandImage from './CardBrandImage/CardBrandImage';
import {
  CardChip,
  CardContainer,
  CardExpirationDate,
  CardHeader,
  CardNumber,
} from './CardPreview.styles';
import EachCardNumber from './EachCardNumber/EachCardNumber';
import {
  DEFAULT_CARD_COLOR,
  getCardIssuerByCode,
  type SelectedCardIssuerCode,
} from '../../constants/cardIssuer';
import { getCardNumberInfo } from '../../utils/cardBrand';

interface Props {
  cardNumber: string;
  expirationDate: { month: string; year: string };
  cardIssuer: SelectedCardIssuerCode;
}

export default function CardPreview({
  cardNumber,
  expirationDate,
  cardIssuer,
}: Props) {
  const { groups, brand } = getCardNumberInfo(cardNumber);
  const issuer = getCardIssuerByCode(cardIssuer);
  const backgroundColor = issuer?.color ?? DEFAULT_CARD_COLOR;

  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardHeader>
        <CardChip />
        <CardBrandImage cardBrand={brand} />
      </CardHeader>
      <CardNumber>
        {groups.map((number, index) => (
          <EachCardNumber key={index} cardNumber={number} index={index} />
        ))}
      </CardNumber>
      <CardExpirationDate>
        {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
      </CardExpirationDate>
    </CardContainer>
  );
}
