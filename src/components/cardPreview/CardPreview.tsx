import MasterCard from '../../src/assets/images/mastercard.png';
import VisaCard from '../../src/assets/images/visa.png';
import CONDITION from '../../constants/condition';
import { CARD_TYPE, CardNumberKey, ExpiryDate } from '../../types/card';
import * as S from './CardPreview.styled';

interface CardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: ExpiryDate;
  cardholderName: string;
  cardType: CARD_TYPE;
}

const CardPreview = ({ cardNumbers, expiryDate, cardholderName, cardType }: CardPreviewProps) => {
  const firstTwoDigits = Number(cardNumbers.first.slice(0, 2));
  const isMaster = firstTwoDigits > CONDITION.MASTER_CARD_MIN && firstTwoDigits < CONDITION.MASTER_CARD_MAX;
  const isVisa = cardNumbers.first[0] === CONDITION.VISA;

  return (
    <S.CardPreviewLayout $cardType={cardType}>
      <S.HeaderWrapper>
        <S.CardMagnetic />
        <S.BrandImageWrapper>
          {isVisa && <S.StyledImage src={VisaCard} />}
          {isMaster && <S.StyledImage src={MasterCard} />}
        </S.BrandImageWrapper>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.CardNumbersWrapper>
          <S.CardNumberText>{cardNumbers.first}</S.CardNumberText>
          <S.CardNumberText>{cardNumbers.second}</S.CardNumberText>
          <S.CardSecretNumber>{'·'.repeat(cardNumbers.third.length)}</S.CardSecretNumber>
          <S.CardSecretNumber>{'·'.repeat(cardNumbers.fourth.length)}</S.CardSecretNumber>
        </S.CardNumbersWrapper>

        <S.ExpiryDateWrapper>
          <span>{expiryDate.month}</span>
          <span>{expiryDate.month && '/'}</span>
          <span>{expiryDate.year}</span>
        </S.ExpiryDateWrapper>

        <S.CardholderNameWrapper>
          <S.CardholderNameText>{cardholderName}</S.CardholderNameText>
        </S.CardholderNameWrapper>
      </S.BodyWrapper>
    </S.CardPreviewLayout>
  );
};

export default CardPreview;
