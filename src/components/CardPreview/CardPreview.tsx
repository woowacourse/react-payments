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
        <S.CardPreviewMiddleText>{cardNumber.first}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>{cardNumber.second}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.third.length }, () => {
            return MASKING;
          })}
        </S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return MASKING;
          })}
        </S.CardPreviewMiddleText>
      </S.CardPreviewMiddle>
      <S.CardPreviewDateBox>
        <S.CardPreviewDateBoxText>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</S.CardPreviewDateBoxText>
      </S.CardPreviewDateBox>
    </S.CardPreviewWrapper>
  );
}
