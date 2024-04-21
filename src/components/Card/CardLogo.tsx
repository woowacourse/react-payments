import styled from "styled-components";

import Visa from "../../assets/Visa.png";
import MasterCard from "../../assets/Mastercard.png";

import { CARD_TYPE } from "../../constants/card";

const CardLogoWrapper = styled.img`
  width: 36px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
`;

const CardLogo = ({ cardNumbers }: { cardNumbers: Map<string, string> }) => {
  const firstCardNumber = cardNumbers.get("0");
  if (!firstCardNumber) return;

  const isVisa = (firstCardNumber: string) => {
    const firstDigit = Number(firstCardNumber.slice(0, 1));
    return firstDigit === CARD_TYPE.visaStart;
  };

  const isMasterCard = (firstCardNumber: string) => {
    const firstTwoDigits = Number(firstCardNumber.slice(0, 2));

    return (
      firstTwoDigits >= CARD_TYPE.masterCardStart &&
      firstTwoDigits <= CARD_TYPE.masterCardEnd
    );
  };

  if (isVisa(firstCardNumber)) {
    return <CardLogoWrapper src={Visa} />;
  }

  if (isMasterCard(firstCardNumber)) {
    return <CardLogoWrapper src={MasterCard} />;
  }
};

export default CardLogo;
