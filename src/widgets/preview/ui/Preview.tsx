import { useEffect } from 'react';
import { getCardImageSrc } from '../utils/getCardImageSrc';
import * as S from './Preview.styles';
import { getColorByCardIssuer } from '../utils/getColorByCardIssuer';

export default function Preview({
  cardIssuer,
  cardNumber,
  cardExpirationDate,
}: {
  cardIssuer: string;
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
}) {
  let imgSrc = '';
  const bgColor = getColorByCardIssuer[cardIssuer] ?? '#333333';

  useEffect(() => {
    imgSrc = getCardImageSrc(cardNumber[0]);
  }, [cardNumber[0]]);

  return (
    <S.CardBackground bgColor={bgColor}>
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
