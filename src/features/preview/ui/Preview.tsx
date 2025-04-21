import { useEffect } from 'react';
import { getCardImageSrc } from '../utils/getCardImageSrc';
import * as S from './Preview.styles';

export default function Preview({
  cardNumber,
  cardExpirationDate,
}: {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
}) {
  let imgSrc = '';

  useEffect(() => {
    imgSrc = getCardImageSrc(cardNumber[0]);
  }, [cardNumber[0]]);

  return (
    <S.CardBackground>
      <S.PreviewContainer>
        <S.PaymentSim />
        <S.CardPreview>{imgSrc !== '' && <S.CardImage src={imgSrc} alt='cardType' />}</S.CardPreview>
      </S.PreviewContainer>
      <S.CardInfoContainer>
        <S.CardNumberContainer>
          <S.InfoText>{cardNumber[0]}</S.InfoText>
          <S.InfoText>{cardNumber[1]}</S.InfoText>
          <S.Secret>{'•'.repeat(cardNumber[2]?.length)}</S.Secret>
          <S.Secret>{'•'.repeat(cardNumber[3]?.length)}</S.Secret>
        </S.CardNumberContainer>
        <S.InfoText>
          {cardExpirationDate.month}
          {cardExpirationDate.year && '/'}
          {cardExpirationDate.year}
        </S.InfoText>
      </S.CardInfoContainer>
    </S.CardBackground>
  );
}
