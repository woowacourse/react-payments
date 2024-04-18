import React from "react";
import * as Styled from "./CardNumbers.styles";
import { MASKING } from "../../constants/setting";

export interface CardNumberProps {
  cardNumbers: number[];
}

const CardNumbers = ({ cardNumbers }: CardNumberProps) => {
  console.log(cardNumbers);
  return (
    <Styled.CardNumbersSection>
      {cardNumbers.map((cardNumber, index) => {
        const isValidNumber = cardNumber !== 0 && !Number.isNaN(cardNumber);
        const maskedNumber = isValidNumber ? MASKING.repeat(cardNumber.toString().length) : null;

        return <div key={index}>{index > 1 ? maskedNumber : isValidNumber && cardNumber}</div>;
      })}
    </Styled.CardNumbersSection>
  );
};

export default CardNumbers;
