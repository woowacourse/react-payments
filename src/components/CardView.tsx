import { CardInfo } from '../types/card';
import styled from 'styled-components';
import CardChip from '../assets/image/cardChip.png';
import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import { CARD_CONFIG } from '../constants/system';
import { CARD_BRAND } from '../constants/cardBrand';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
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

const TextBox = styled.div`
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

const SecretNumber = styled.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;

export default function CardView({ cardInfo }: { cardInfo: CardInfo }) {
  const checkCardType = (cardNumber: string) => {
    const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
    if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return Visa;
    if (
      CARD_CONFIG.MASTER.START <= cardBrandNumber &&
      cardBrandNumber <= CARD_CONFIG.MASTER.END
    )
      return Master;
  };

  const cardImgSrc = checkCardType(cardInfo.cardNumbers.cardNumber1.value);
  return (
    <>
      <CardContainer color={CARD_BRAND[cardInfo.cardBrand.cardBrand.value] || '#333333'}>
        <ImgBox>
          <CardImg src={CardChip} />
          {cardImgSrc && <CardImg src={cardImgSrc} />}
        </ImgBox>

        <CardNumbers>
          <CardNumber>{cardInfo.cardNumbers.cardNumber1.value}</CardNumber>
          <CardNumber>{cardInfo.cardNumbers.cardNumber2.value}</CardNumber>
          <SecretNumber>{'•'.repeat(cardInfo.cardNumbers.cardNumber3.value.length)}</SecretNumber>
          <SecretNumber>{'•'.repeat(cardInfo.cardNumbers.cardNumber4.value.length)}</SecretNumber>
        </CardNumbers>
        <TextBox>
          {cardInfo.expirationDate.month.value.length === 1 ? `0${cardInfo.expirationDate.month.value}` : cardInfo.expirationDate.month.value}
          {cardInfo.expirationDate.year.value.length > 0 ? ' / ' : ''}
          {cardInfo.expirationDate.year.value.length === 1 ? `0${cardInfo.expirationDate.year.value}` : cardInfo.expirationDate.year.value}
        </TextBox>
        <TextBox>{cardInfo.userName.userName.value}</TextBox>
      </CardContainer>
    </>
  );
}
