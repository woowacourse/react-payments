import { CardInfoProps } from '../../../shared/type/types';
import * as S from './Preview.styles';

const getCardImageSrc = (cardNumber = '') => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === '4') return './Visa.svg';
  if (first === '5' && second >= 1 && second <= 5) return './Mastercard.svg';
  return '';
};

export default function Preview({ cardInfo }: { cardInfo: CardInfoProps }) {
  const imgSrc = getCardImageSrc(cardInfo.cardNumber[0]);

  return (
    <S.CardBackground>
      <S.PreviewContainer>
        <S.PaymentSim />
        <S.CardPreview>{imgSrc !== '' && <S.CardImage src={imgSrc} alt='cardType' />}</S.CardPreview>
      </S.PreviewContainer>
      <S.CardInfoContainer>
        <S.CardNumberContainer>
          <S.InfoText>{cardInfo?.cardNumber[0]}</S.InfoText>
          <S.InfoText>{cardInfo?.cardNumber[1]}</S.InfoText>
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
