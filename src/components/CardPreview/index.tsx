import styled from 'styled-components';
import CardBrandLogo from './CardBrandLogo';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

interface CardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: { month: string; year: string };
  cardholderName: string;
}

const CardPreview = ({ cardNumbers, expiryDate, cardholderName }: CardPreviewProps) => {
  const firstTwoDigits = cardNumbers.first.slice(0, 2);

  return (
    <CardPreviewLayout>
      <HeaderWrapper>
        <CardMagnetic />
        <CardBrandLogo firstTwoDigits={firstTwoDigits} />
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
  font-size: 20px;
`;

const CardholderNameText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default CardPreview;
