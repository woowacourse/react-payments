import React, { useState } from "react";
import CardNumbers from "./CardNumbers";
import CardExpirationDate from "./CardExpirationDate";
import CardOwnerName from "./CardOwnerName";
import CardPreview from "./CardPreview";
import styled from "styled-components";

const CardEnrollFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`;

const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 30px;
`;

export default function CardEnrollForm() {
  const [cardInformation, setCardInformation] = useState({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    cardOwnerName: "",
  });

  const inputHandler = (inputValue: string, inputId: string) => {
    setCardInformation((prev) => ({
      ...prev,
      [inputId]: inputValue,
    }));

    console.log(cardInformation);
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation}></CardPreview>
      <CardInformation>
        <CardNumbers inputHandler={inputHandler}></CardNumbers>
        <CardExpirationDate inputHandler={inputHandler}></CardExpirationDate>
        <CardOwnerName inputHandler={inputHandler}></CardOwnerName>
      </CardInformation>
    </CardEnrollFormContainer>
  );
}
