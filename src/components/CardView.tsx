import { CardBrand, CardNumbers, CVC, ExpirationDate, UserName } from '../types/card';
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

const CardNumbersBox = styled(TextBox)`
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

interface Props{
  cardNumbers : CardNumbers;
  expirationDate : ExpirationDate;
  userName : UserName
  cardBrand : CardBrand
  CVC : CVC
}
export default function CardView({
  cardNumbers,
  expirationDate,
  userName,
  cardBrand,
  CVC,
}:Props ) {
  const cvcValue = CVC.CVCField.CVC.value;
  const monthValue = expirationDate.expirationDateFields.month.value;
  const yearValue = expirationDate.expirationDateFields.year.value;

  const checkCardType = (cardNumber: string) => {
    const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
    if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return Visa;
    if (
      CARD_CONFIG.MASTER.START <= cardBrandNumber &&
      cardBrandNumber <= CARD_CONFIG.MASTER.END
    )
      return Master;
  };

  const cardImgSrc = checkCardType(cardNumbers.cardNumberFields.cardNumber1.value);

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
        color={CARD_BRAND[cardBrand.cardBrandField.cardBrand.value] || '#333333'}
      >
        <ImgBox>
          <CardImg src={CardChip} />
          {cardImgSrc && <CardImg src={cardImgSrc} />}
        </ImgBox>

        <CardNumbersBox>
          <CardNumber>{cardNumbers.cardNumberFields.cardNumber1.value}</CardNumber>
          <CardNumber>{cardNumbers.cardNumberFields.cardNumber2.value}</CardNumber>
          <SecretNumber>
            {'•'.repeat(cardNumbers.cardNumberFields.cardNumber3.value.length)}
          </SecretNumber>
          <SecretNumber>
            {'•'.repeat(cardNumbers.cardNumberFields.cardNumber4.value.length)}
          </SecretNumber>
        </CardNumbersBox>
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
        <TextBox>{userName.userNameField.userName.value}</TextBox>
      </FrontCardContainer>
    </>
  );
}
