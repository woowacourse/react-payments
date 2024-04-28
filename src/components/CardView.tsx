import { CardInfo } from '../types/card';
import styled from 'styled-components';
import CardChip from '../assets/image/cardclip.svg';
import Visa from '../assets/image/VISA.svg';
import Master from '../assets/image/MasterCard.svg';
import { CARD_CONFIG } from '../constants/system';
import { CARD_BRAND } from '../constants/cardBrand';

const FrontCardContainer = styled.div`
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
const BackCardContainer = styled.div`
  display: flex;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const CVCBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #cbba64;
  color: #ffffff;
  font-weight: bold;
  align-items: center;
  bottom: 30px;
  padding-right: 16px;
  box-sizing: border-box;
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
  const cvcValue = cardInfo.CVC.CVC.value;
  const monthValue = cardInfo.expirationDate.month.value;
  const yearValue = cardInfo.expirationDate.year.value;

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

  if (cvcValue.length > 0 && cvcValue.length < 3) {
    return (
      <>
        <BackCardContainer color={'#D5D5D5'}>
          <CVCBox>{cvcValue}</CVCBox>
        </BackCardContainer>
      </>
    );
  }
  return (
    <>
      <FrontCardContainer
        color={CARD_BRAND[cardInfo.cardBrand.cardBrand.value] || '#333333'}
      >
        <ImgBox>
          <CardImg src={CardChip} />
          {cardImgSrc && <CardImg src={cardImgSrc} />}
        </ImgBox>

        <CardNumbers>
          <CardNumber>{cardInfo.cardNumbers.cardNumber1.value}</CardNumber>
          <CardNumber>{cardInfo.cardNumbers.cardNumber2.value}</CardNumber>
          <SecretNumber>
            {'•'.repeat(cardInfo.cardNumbers.cardNumber3.value.length)}
          </SecretNumber>
          <SecretNumber>
            {'•'.repeat(cardInfo.cardNumbers.cardNumber4.value.length)}
          </SecretNumber>
        </CardNumbers>
        <TextBox>
          {monthValue.length === 1 &&
          monthValue !== '0'
            ? `0${monthValue}`
            : monthValue}
          {yearValue.length > 0 ? ' / ' : ''}
          {yearValue.length === 1 &&
          yearValue !== '0'
            ? `0${yearValue}`
            : yearValue}
        </TextBox>
        <TextBox>{cardInfo.userName.userName.value}</TextBox>
      </FrontCardContainer>
    </>
  );
}
