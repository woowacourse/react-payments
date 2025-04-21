import * as S from './CardPreview.styles';
import MasterCard from '../logo/MasterCard';
import VisaCard from '../logo/VisaCard';
import { MASKING } from '../../constants';
import { CardBrandType } from '../CardBrand/CardBrand';

interface CardPreviewProps {
  cardType: 'visa' | 'master' | '';
  cardNumber: Record<string, string>;
  cardExpirationDate: Record<string, string>;
  CardBrandType: CardBrandType | null;
}

export default function CardPreview({ cardType, cardNumber, cardExpirationDate, CardBrandType }: CardPreviewProps) {
  return (
    <S.CardPreviewWrapper CardBrandType={CardBrandType}>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType === 'visa' && <VisaCard width={36} />}
        {cardType === 'master' && <MasterCard width={36} />}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>
          {Array.from({ length: cardNumber.third.length }, () => {
            return MASKING;
          })}
        </span>
        <span>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return MASKING;
          })}
        </span>
      </S.CardPreviewMiddle>
      <div>
        <span>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</span>
      </div>
    </S.CardPreviewWrapper>
  );
}
