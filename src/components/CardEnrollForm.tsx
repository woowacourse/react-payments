import { CardInformation, CardIssuer } from "../types/cardInformation";

import CardExpirationDate from "./CardExpirationDate";
import CardIssuerSelect from "./CardIssuerSelect";
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

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;

export default function CardEnrollForm() {
  const [cardInformation, setCardInformation] = useState<CardInformation>({
    cardIssuer: "",
    cardNumbers: ["", "", "", ""],
    cardExpiration: {
      month: "",
      year: "",
    },
    cardOwnerName: "",
  });

  const onCardIssuerChange = (inputValue: CardIssuer) => {
    setCardInformation((prev) => ({ ...prev, cardIssuer: inputValue }));
  };

  const onCardNumbersChange = (inputValue: string, targetIndex: number) => {
    setCardInformation((prev) => {
      const cardNumbers: CardInformation["cardNumbers"] = [...prev.cardNumbers];
      cardNumbers[targetIndex] = inputValue;
      return { ...prev, cardNumbers };
    });
  };

  const onCardExpirationChange = (inputValue: string, targetKey: string) => {
    setCardInformation((prev) => ({
      ...prev,
      cardExpiration: {
        ...prev.cardExpiration,
        [targetKey]: inputValue,
      },
    }));
  };

  const onCardOwnerNameChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardOwnerName: inputValue }));
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} />
      <CardInformationContainer>
        <CardIssuerSelect onChange={onCardIssuerChange} />
        <CardNumbers
          cardNumbers={cardInformation.cardNumbers}
          onChange={onCardNumbersChange}
        />
        <CardExpirationDate
          cardExpiration={cardInformation.cardExpiration}
          onChange={onCardExpirationChange}
        />
        <CardOwnerName
          cardOwnerName={cardInformation.cardOwnerName}
          onChange={onCardOwnerNameChange}
        />
      </CardInformationContainer>
    </CardEnrollFormContainer>
  );
}
