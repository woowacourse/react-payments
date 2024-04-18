import styled from "styled-components";

import Visa from "../../assets/Visa.png";
import MasterCard from "../../assets/Mastercard.png";

import { CardInfo } from "../PaymentApp";

const CardLogoWrapper = styled.img`
  width: 36px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
`;

const CardLogo = ({ cardNumbers }: { cardNumbers: CardInfo[] }) => {
  let cardType = "";

  if (!cardNumbers || cardNumbers.length === 0) {
    return;
  }

  const firstCardNumberObject = cardNumbers
    .slice()
    .reverse()
    .find((item) => item.index === "0");
  if (!firstCardNumberObject) {
    cardType = "";
  } else {
    const firstCardNumber = firstCardNumberObject.currentValue;

    if (firstCardNumber.startsWith("4")) {
      cardType = Visa;
    }

    if (firstCardNumber.startsWith("5")) {
      const firstTwoDigits = firstCardNumber.slice(0, 2);
      if (Number(firstTwoDigits) >= 51 && Number(firstTwoDigits) <= 55) {
        cardType = MasterCard;
      }
    }
  }

  if (cardType === Visa || cardType === MasterCard)
    return <CardLogoWrapper src={cardType} />;
};

export default CardLogo;
