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
  if (cardNumbers.length === 0) return;

  const isVisa = (firstCardNumber: string) => {
    return firstCardNumber.startsWith("4");
  };

  const isMasterCard = (firstCardNumber: string) => {
    const firstTwoDigits = Number(firstCardNumber.slice(0, 2));

    return firstTwoDigits >= 51 && firstTwoDigits <= 55;
  };

  const firstCardNumberObject = cardNumbers
    .slice()
    .reverse()
    .find((item) => item.index === "0");

  if (firstCardNumberObject) {
    const firstCardNumber = firstCardNumberObject.currentValue;

    if (isVisa(firstCardNumber)) {
      return <CardLogoWrapper src={Visa} />;
    }

    if (isMasterCard(firstCardNumber)) {
      return <CardLogoWrapper src={MasterCard} />;
    }
  }
};

export default CardLogo;
