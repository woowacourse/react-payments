import * as S from './CardPreview.styles';
import VisaCard from '../../../../components/Icon/VisaCard';
import MasterCard from '../../../../components/Icon/MasterCard';
import Masking from './components/Masking';
import { getCardType } from '../../../../utils';
import { DATE_SEPARATOR } from './constants';
import { useCardFormContext } from '../../context/useCardFormContext';

export default function CardPreview() {
  const { cardNumber, cardExpirationDate, cardBrandTypeState } = useCardFormContext();
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
    <S.CardPreviewWrapper CardBrandType={cardBrandTypeState}>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType()}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <S.CardPreviewMiddleText CardBrandType={cardBrandTypeState}>{cardNumber.first}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText CardBrandType={cardBrandTypeState}>{cardNumber.second}</S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.third.length }, (_, index) => (
            <Masking key={`third-masking-${index}`} CardBrandType={cardBrandTypeState} />
          ))}
        </S.CardPreviewMiddleText>
        <S.CardPreviewMiddleText>
          {Array.from({ length: cardNumber.fourth.length }, (_, index) => (
            <Masking key={`fourth-masking-${index}`} CardBrandType={cardBrandTypeState} />
          ))}
        </S.CardPreviewMiddleText>
      </S.CardPreviewMiddle>
      <S.CardPreviewDateBox>
        <S.CardPreviewDateBoxText
          CardBrandType={cardBrandTypeState}
        >{`${cardExpirationDate.month}${cardExpirationDate.year && DATE_SEPARATOR}${cardExpirationDate.year}`}</S.CardPreviewDateBoxText>
      </S.CardPreviewDateBox>
    </S.CardPreviewWrapper>
  );
}
