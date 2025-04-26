import * as S from './CardPreview.styles';
import { CardPreviewProps } from './type';
import VisaCard from '../../../../components/Icon/VisaCard';
import MasterCard from '../../../../components/Icon/MasterCard';
import { getCardType } from '../../../../utils';
import { MASKING } from '../../../../constants';

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
        <S.CardPreviewDateBoxText
          CardBrandType={CardBrandType}
        >{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</S.CardPreviewDateBoxText>
      </S.CardPreviewDateBox>
    </S.CardPreviewWrapper>
  );
}
