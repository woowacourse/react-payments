import { Card } from '../types/card';
import styled from 'styled-components';
import CardChip from '../assets/image/cardChip.png';
import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import { SECRET_NUMBER, SLASH } from '../constants/system';
import { isMasterCard, isVisaCard } from '../utils/checkCardType';
import { CardContainer } from './common/container.style';

interface Props {
  cardInfo: Card;
}

export default function CardView({ cardInfo }: Props) {
  const { cardNumbers, expiryDate, userName, cardCompany } = cardInfo;

  const getCardType = (cardNumber: string) => {
    const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);

    if (isVisaCard(cardBrandNumber)) return 'visa';
    if (isMasterCard(cardBrandNumber)) return 'master';
  };

  const getCardImage = (cardNumber: string) => {
    const cardType = getCardType(cardNumber);

    if (cardType === 'visa') return Visa;
    if (cardType === 'master') return Master;
  };

  const cardImgSrc = getCardImage(cardNumbers.cardNumber1);

  const formatDate = (date: string) => {
    if (date.length === 1) {
      return `0${date}`;
    }
    return date;
  };

  return (
    <CardFrontContainer color={cardCompany.color}>
      <ImgBox>
        <CardImg src={CardChip} />
        {cardImgSrc && <CardImg src={cardImgSrc} />}
      </ImgBox>

      <CardNumbers>
        <CardNumber>{cardNumbers.cardNumber1}</CardNumber>
        <CardNumber>{cardNumbers.cardNumber2}</CardNumber>
        <SecretCardNumber>
          {SECRET_NUMBER.repeat(cardNumbers.cardNumber3.length)}
        </SecretCardNumber>
        <SecretCardNumber>
          {SECRET_NUMBER.repeat(cardNumbers.cardNumber4.length)}
        </SecretCardNumber>
      </CardNumbers>
      <TextBox>
        {formatDate(expiryDate.month)}
        {expiryDate.year.length > 0 ? SLASH : ''}
        {formatDate(expiryDate.year)}
      </TextBox>
      <TextBox>{userName}</TextBox>
    </CardFrontContainer>
  );
}

export const CardFrontContainer = styled(CardContainer)`
  box-sizing: border-box;
  padding: 15px;
  background-color: ${({ color }) => (color ? color : 'black')};
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardImg = styled.img`
  width: 36px;
  height: 22px;
`;

const TextBox = styled.p`
  display: flex;
  align-items: flex-end;
  height: 30px;
`;

const CardNumbers = styled(TextBox)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const CardNumber = styled.div`
  width: 100px;
  letter-spacing: 3px;
`;

const SecretCardNumber = styled.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;
