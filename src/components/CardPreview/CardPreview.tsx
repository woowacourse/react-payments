import * as S from './CardPreview.styles';
import MasterCard from '../logo/MasterCard';
import VisaCard from '../logo/VisaCard';
import { MASKING } from '../../constants';
import { getCardType } from '../../utils';
import { CardPreviewProps } from './type';

export default function CardPreview({ cardNumber, cardExpirationDate, CardBrandType }: CardPreviewProps) {
  const cardType = getCardType(cardNumber.first);
  return (
    <S.CardPreviewWrapper CardBrandType={CardBrandType}>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType === 'visa' && <VisaCard width={36} />}
        {cardType === 'master' && <MasterCard width={36} />}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>{cardNumber.first}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>{cardNumber.second}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>
          {Array.from({ length: cardNumber.third.length }, () => {
            return MASKING;
          })}
        </S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>
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
