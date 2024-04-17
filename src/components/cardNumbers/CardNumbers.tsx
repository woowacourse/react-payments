import React from "react";
import * as Styled from "./CardNumbers.styles";

interface CardNumberProps {
  cardNumbers: number[];
}

const CardNumbers = ({ cardNumbers }: CardNumberProps) => {
  return (
    <Styled.CardNumbersSection>
      {cardNumbers.map((cardNumber, index) => {
        const cardNumberLength = cardNumber.toString().length;
        if (index > 1) {
          return <div key={index}>{cardNumber !== 0 && !Number.isNaN(cardNumber) && "•".repeat(cardNumberLength)}</div>;
        }
        return <div key={index}>{cardNumber !== 0 && !Number.isNaN(cardNumber) && cardNumber}</div>;
      })}
    </Styled.CardNumbersSection>
  );
};

export default CardNumbers;
