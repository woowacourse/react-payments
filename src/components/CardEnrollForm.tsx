import CardExpirationDate from "./CardExpirationDate";
import CardNumbers from "./CardNumbers";
import CardOwnerName from "./CardOwnerName";
import CardPreview from "./CardPreview";
import styled from "styled-components";
import { useState } from "react";

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
  padding: 45px 30px;
  gap: 16px;
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
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} />
      <CardInformation>
        <CardNumbers
          cardNumber1={cardInformation.cardNumber1}
          cardNumber2={cardInformation.cardNumber2}
          cardNumber3={cardInformation.cardNumber3}
          cardNumber4={cardInformation.cardNumber4}
          inputHandler={inputHandler}
        />
        <CardExpirationDate
          cardExpirationMonth={cardInformation.cardExpirationMonth}
          cardExpirationYear={cardInformation.cardExpirationYear}
          inputHandler={inputHandler}
        />
        <CardOwnerName
          cardOwnerName={cardInformation.cardOwnerName}
          inputHandler={inputHandler}
        />
      </CardInformation>
    </CardEnrollFormContainer>
  );
}
