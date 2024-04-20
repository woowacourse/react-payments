import { Card } from '../types/card';
import styled from 'styled-components';
import CardChip from '../assets/image/cardChip.png';
import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import { CARD_CONFIG } from '../constants/system';

interface Props {
  cardInfo: Card;
}

export default function CardView({ cardInfo }: Props) {
  const isVisaCard = (cardBrandNumber: number) => {
    if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return true;
  };

  const isMasterCard = (cardBrandNumber: number) => {
    if (
      CARD_CONFIG.MASTER.START <= cardBrandNumber &&
      cardBrandNumber <= CARD_CONFIG.MASTER.END
    )
      return true;
  };

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

  const cardImgSrc = getCardImage(cardInfo.cardNumber1);

  const formatDate = (date: string) => {
    if (date.length === 1) {
      return `0${date}`;
    }
    return date;
  };
  return (
    <CardContainer>
      <ImgBox>
        <CardImg src={CardChip} />
        {cardImgSrc && <CardImg src={cardImgSrc} />}
      </ImgBox>

      <CardNumbers>
        <CardNumber> {cardInfo.cardNumber1} </CardNumber>
        <CardNumber> {cardInfo.cardNumber2} </CardNumber>
        <SecretCardNumber>
          {'•'.repeat(cardInfo.cardNumber3.length)}
        </SecretCardNumber>
        <SecretCardNumber>
          {'•'.repeat(cardInfo.cardNumber4.length)}
        </SecretCardNumber>
      </CardNumbers>
      <TextBox>
        {formatDate(cardInfo.month)}
        {cardInfo.year.length > 0 ? ' / ' : ''}
        {formatDate(cardInfo.year)}
      </TextBox>
      <TextBox> {cardInfo.userName} </TextBox>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: #333333;
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
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
