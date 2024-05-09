import { Card } from '../types/card';
import styled from 'styled-components';
import CardChip from '../assets/image/cardChip.png';
import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import AMEX from '../assets/image/amex.png';
import DINERS from '../assets/image/diners.png';
import UNIONPAY from '../assets/image/unionpay.png';
import { SLASH } from '../constants/system';
import { CardContainer } from '../style/container.style';
import { formatDate } from '../utils/formatDate';
import { useMemo } from 'react';

interface Props {
  cardInfo: Card;
}

export default function CardFrontView({ cardInfo }: Props) {
  const { cardBrand, cardNumbers, expiryDate, userName } = cardInfo;

  const getCardImage = (cardBrand: string) => {
    if (cardBrand === 'VISA') return Visa;
    if (cardBrand === 'MASTER') return Master;
    if (cardBrand === 'AMEX') return AMEX;
    if (cardBrand === 'DINERS') return DINERS;
    if (cardBrand === 'UNIONPAY') return UNIONPAY;
    else return '';
  };

  const cardImgSrc = useMemo(() => {
    if (cardBrand) {
      return getCardImage(cardBrand);
    }
  }, [cardBrand]);

  return (
    <CardFrontContainer>
      <ImgBox>
        <CardImg src={CardChip} />
        {cardImgSrc && <CardImg src={cardImgSrc} />}
      </ImgBox>

      <CardNumbers>{cardNumbers}</CardNumbers>
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

const TextBox = styled.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
`;

const CardNumbers = styled(TextBox)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  letter-spacing: 3px;
`;
