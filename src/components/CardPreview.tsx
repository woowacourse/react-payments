import styled from 'styled-components';
import MasterCard from '../../src/assets/images/mastercard.png';
import VisaCard from '../../src/assets/images/visa.png';
import CONDITION from '../constants/condition';
import { CardNumberKey, ExpiryDate } from './types/card';

interface CardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: ExpiryDate;
  cardholderName: string;
}

const CardPreview = ({ cardNumbers, expiryDate, cardholderName }: CardPreviewProps) => {
  const firstTwoDigits = Number(cardNumbers.first.slice(0, 2));
  const isVisa = cardNumbers.first[0] === CONDITION.VISA;
  const isMaster = firstTwoDigits > CONDITION.MASTER_CARD_MIN && firstTwoDigits < CONDITION.MASTER_CARD_MAX;

  return (
    <CardPreviewLayout>
      <HeaderWrapper>
        <CardMagnetic />
        <BrandImageWrapper>
          {isVisa && <StyledImage src={VisaCard} />}
          {isMaster && <StyledImage src={MasterCard} />}
        </BrandImageWrapper>
      </HeaderWrapper>
      <BodyWrapper>
        <CardNumbersWrapper>
          <CardNumberText>{cardNumbers.first}</CardNumberText>
          <CardNumberText>{cardNumbers.second}</CardNumberText>
          <CardSecretNumber>{'·'.repeat(cardNumbers.third.length)}</CardSecretNumber>
          <CardSecretNumber>{'·'.repeat(cardNumbers.fourth.length)}</CardSecretNumber>
        </CardNumbersWrapper>

        <ExpiryDateWrapper>
          <span>{expiryDate.month}</span>
          <span>{expiryDate.month && '/'}</span>
          <span>{expiryDate.year}</span>
        </ExpiryDateWrapper>

        <CardholderNameWrapper>
          <CardholderNameText>{cardholderName}</CardholderNameText>
        </CardholderNameWrapper>
      </BodyWrapper>
    </CardPreviewLayout>
  );
};

const CardPreviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: #333333;
  padding: 16px 20px 20px;
  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

const CardMagnetic = styled.div`
  background-color: #ddcd78;
  width: 50px;
  border-radius: 5px;
`;

const BrandImageWrapper = styled.div`
  width: 50px;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  letter-spacing: 2px;
`;

const CardNumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  gap: 20px;
`;

const CardNumberText = styled.p`
  display: flex;
  flex-basis: 25%;
  height: 20px;
  font-size: 20px;
`;

const CardSecretNumber = styled.p`
  display: flex;
  flex-basis: 25%;
  font-size: 28px;
`;

const ExpiryDateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 20px;
`;

const CardholderNameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const CardholderNameText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default CardPreview;
