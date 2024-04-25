import MasterCard from '../../../src/assets/images/mastercard.png';
import VisaCard from '../../../src/assets/images/visa.png';
import { CARD_TYPE, CardNumberKey, ExpiryDate } from '../../types/card';
import * as S from './CardPreview.styled';

interface FrontCardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: ExpiryDate;
  cardholderName: string;
  cardType: CARD_TYPE;
  isVisa: boolean;
  isMaster: boolean;
}

const FrontCardPreview = ({
  isVisa,
  isMaster,
  cardNumbers,
  expiryDate,
  cardholderName,
  cardType,
}: FrontCardPreviewProps) => {
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

export default FrontCardPreview;
