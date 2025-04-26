import { useEffect } from 'react';
import { getCardImageSrc } from '../utils/getCardImageSrc';
import * as S from './Preview.styles';
import { getColorByCardIssuer } from '../utils/getColorByCardIssuer';
import { useCardInfoContext } from '../../../app/context/cardInfo/CardInfoProvider';

export default function Preview() {
  const { cardInfo } = useCardInfoContext();

  let imgSrc = '';
  const bgColor = getColorByCardIssuer[cardInfo.cardIssuer] ?? '#333333';

  useEffect(() => {
    imgSrc = getCardImageSrc(cardInfo.cardNumber[0]);
  }, [cardInfo.cardNumber[0]]);

  return (
    <S.CardBackground bgColor={bgColor}>
      <S.PreviewContainer>
        <S.PaymentSim />
        <S.CardPreview>{imgSrc !== '' && <S.CardImage src={imgSrc} alt='cardType' />}</S.CardPreview>
      </S.PreviewContainer>
      <S.CardInfoContainer>
        <S.CardNumberContainer>
          <S.InfoText>{cardInfo.cardNumber[0]}</S.InfoText>
          <S.InfoText>{cardInfo.cardNumber[1]}</S.InfoText>
          <S.Secret>{'•'.repeat(cardInfo.cardNumber[2]?.length)}</S.Secret>
          <S.Secret>{'•'.repeat(cardInfo.cardNumber[3]?.length)}</S.Secret>
        </S.CardNumberContainer>
        <S.InfoText>
          {cardInfo.cardExpirationDate.month}
          {cardInfo.cardExpirationDate.year && '/'}
          {cardInfo.cardExpirationDate.year}
        </S.InfoText>
      </S.CardInfoContainer>
    </S.CardBackground>
  );
}
