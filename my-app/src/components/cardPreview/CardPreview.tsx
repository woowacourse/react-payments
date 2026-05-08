import { getCardBrand } from '../../utils/Validation';
import type { CardCompany } from '../cardCompanySection/CardCompanyConstants';
import CardBrandImage from './cardBrandImage/CardBrandImage';
import {
  CardChip,
  CardContainer,
  CardExpirationDate,
  CardHeader,
  CardNumber,
} from './CardPreview.styles';
import EachCardNumber from './eachCardNumber/EachCardNumber';

interface Props {
  cardNumber: string[];
  expirationDate: { month: string; year: string };
  cardCompany: CardCompany | '';
}

export default function CardPreview({ cardNumber, expirationDate, cardCompany }: Props) {
  const currentBrand = getCardBrand(cardNumber.join(''));

  return (
    <CardContainer company={cardCompany || 'Default'}>
      <CardHeader>
        <CardChip />
        <CardBrandImage brand={currentBrand} />
      </CardHeader>
      <CardNumber>
        {cardNumber.map((number, index) => (
          <EachCardNumber key={index} cardNumber={number} index={index} />
        ))}
      </CardNumber>
      <CardExpirationDate>
        {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
      </CardExpirationDate>
    </CardContainer>
  );
}
