import styled from 'styled-components';

import IcChip from '../asset/IcChip.svg';
import CardBrand from './CardBrand';

import REGEX from '../constants/regex';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 246px;
  height: 154px;
  padding: 16px;
  border-radius: 8px;
  background-color: #333333;
  box-shadow: rgba(0, 0, 0, 0.35) 8px 12px 16px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
  width: 34px;
`;

const CardNameAndExpiration = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
`;

const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NameLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
`;

const Name = styled.p`
  max-width: 156px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardExpirationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ExpirationLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: white;
`;

const Expiration = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: white;
`;

const Image = styled.img`
  width: 36px;
  height: 28px;
`;

const CardPreview = ({ ...props }: CardInfo) => {
  const { cardNumber, expirationMonth, expirationYear, name } = props;

  const secureNumber = (number: string) => {
    return number.replace(REGEX.allNumbers, '∙');
  };

  return (
    <Card>
      <CardHeader>
        <Image src={IcChip} />
        <CardBrand firstCardNumbers={cardNumber[0]} />
      </CardHeader>
      <CardNumbers>
        <CardNumber>{cardNumber[0]}</CardNumber>
        <CardNumber>{cardNumber[1]}</CardNumber>
        <CardNumber>{secureNumber(cardNumber[2])}</CardNumber>
        <CardNumber>{secureNumber(cardNumber[3])}</CardNumber>
      </CardNumbers>
      <CardNameAndExpiration>
        <CardNameContainer>
          <NameLabel>NAME</NameLabel>
          <Name>{name}</Name>
        </CardNameContainer>
        <CardExpirationContainer>
          <ExpirationLabel>EXPIRATION</ExpirationLabel>
          <Expiration>{`${expirationMonth}${expirationMonth ? '/' : ''}${expirationYear}`}</Expiration>
        </CardExpirationContainer>
      </CardNameAndExpiration>
    </Card>
  );
};

export default CardPreview;
