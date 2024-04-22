import styled from "styled-components";
import Visa from "../../assets/Visa.png";
import MasterCard from "../../assets/Mastercard.png";
import { CARD_TYPES } from "../../constants/card";

const CardLogoWrapper = styled.img`
  width: 36px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
`;

const CardLogo = ({ cardNumbers }: { cardNumbers: string[] }) => {
  let cardType = "";

  if (!cardNumbers || cardNumbers.length === 0) {
    return;
  }

  if (cardNumbers[0].startsWith("4")) {
    cardType = Visa;
  }

  if (cardNumbers[0].startsWith("5")) {
    const firstTwoDigits = cardNumbers[0].slice(0, 2);
    if (CARD_TYPES.MASTERCARD.includes(Number(firstTwoDigits))) {
      cardType = MasterCard;
    }
  }

  if (cardType === Visa || cardType === MasterCard) return <CardLogoWrapper src={cardType} />;
};

export default CardLogo;
