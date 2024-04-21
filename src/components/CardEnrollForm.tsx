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
  const [cardInformation, setCardInformation] = useState<CardInformation>({
    cardNumbers: ["", "", "", ""],
    cardExpiration: {
      month: "",
      year: "",
    },
    cardOwnerName: "",
  });

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
      <CardInformation>
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
      </CardInformation>
    </CardEnrollFormContainer>
  );
}
