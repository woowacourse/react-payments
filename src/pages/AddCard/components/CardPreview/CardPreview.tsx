import * as S from './CardPreview.styles';
import VisaCard from '../../../../components/Icon/VisaCard';
import MasterCard from '../../../../components/Icon/MasterCard';
import Masking from './components/Masking';
import { CardPreviewProps } from './type';
import { getCardType } from '../../../../utils';

export default function CardPreview({ cardNumber, cardExpirationDate, CardBrandType }: CardPreviewProps) {
  const cardType = () => {
    switch (getCardType(cardNumber.first)) {
      case 'visa':
        return <VisaCard width={36} />;
      case 'master':
        return <MasterCard width={36} />;
      default:
        return null;
    }
  };

  return (
    <S.CardPreviewWrapper CardBrandType={CardBrandType}>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType()}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>{cardNumber.first}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText CardBrandType={CardBrandType}>{cardNumber.second}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.third.length }, () => (
            <Masking CardBrandType={CardBrandType} />
          ))}
        </S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.fourth.length }, () => (
            <Masking CardBrandType={CardBrandType} />
          ))}
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
