import styled from 'styled-components';
import MasterCard from '../../src/assets/images/mastercard.png';
import VisaCard from '../../src/assets/images/visa.png';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

interface CardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: { month: string; year: string };
  cardholderName: string;
}

const CardPreview = ({ cardNumbers, expiryDate, cardholderName }: CardPreviewProps) => {
  const isVisa = cardNumbers.first[0] === '4';
  const firstTwoDigits = Number(cardNumbers.first.slice(0, 2));
  const isMaster = firstTwoDigits > 50 && firstTwoDigits < 56;

  return (
    <CardPreviewLayout>
      <HeaderWrapper>
        <CardMagnetic />
        <BrandImageWrapper>
          {isVisa && <StyledImage src={MasterCard} />}
          {isMaster && <StyledImage src={VisaCard} />}
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
          <p>{expiryDate.month}</p>
          <p>{expiryDate.month && '/'}</p>
          <p>{expiryDate.year}</p>
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
  margin: 60px 0 50px 0;

  background-color: #333333;
  padding: 16px 20px 20px 20px;
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
  letter-spacing: 2;
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
  flex-basis: 20%;
  font-size: 20px;
`;

const CardholderNameText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default CardPreview;
