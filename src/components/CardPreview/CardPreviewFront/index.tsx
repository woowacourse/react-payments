import * as S from '../cardPreview.styles';

import CardBrandLogo from './CardBrandLogo';
import CardNumber from './CardNumberContainer';
import ExpiryDate from './ExpiryDate';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

interface CardPreviewFrontProps {
  cardType: S.CardType;
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: { month: string; year: string };
  cardholderName: string;
}

const CardPreviewFront = ({ cardType, cardNumbers, expiryDate, cardholderName }: CardPreviewFrontProps) => {
  const firstTwoDigits = cardNumbers.first.slice(0, 2);

  return (
    <S.CardPreviewContainer cardType={cardType}>
      <S.CardPreviewFrontWrapper>
        <S.HeaderWrapper>
          <S.CardMagnetic />
          <CardBrandLogo firstTwoDigits={firstTwoDigits} />
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <S.CardNumbersWrapper>
            <CardNumber data={cardNumbers.first} />
            <CardNumber data={cardNumbers.second} />
            <CardNumber data={cardNumbers.third} type="secret" />
            <CardNumber data={cardNumbers.fourth} type="secret" />
          </S.CardNumbersWrapper>
          <ExpiryDate expiryDate={expiryDate} />
          <S.CardholderNameWrapper>
            <S.CardholderNameText>{cardholderName}</S.CardholderNameText>
          </S.CardholderNameWrapper>
        </S.BodyWrapper>
      </S.CardPreviewFrontWrapper>
    </S.CardPreviewContainer>
  );
};

export default CardPreviewFront;
