import CardCVCInput from "./CardCVCInput";
import CardExpirationDate from "./CardExpirationDate";
import { CardInformation } from "../types/cardInformation";
import { CardIssuer } from "../constants/cardIssuers";
import CardIssuerSelect from "./CardIssuerSelect";
import CardNumbers from "./CardNumbers";
import CardOwnerName from "./CardOwnerName";
import CardPasswordInput from "./CardPasswordInput";
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
    cardNumbers: ["", "", "", ""],
    cardIssuer: "",
    cardExpiration: {
      month: "",
      year: "",
    },
    cardOwnerName: "",
    cardCVC: "",
    cardPassword: "",
  });

  const [isCVCFocused, setIsCVCFocused] = useState(false);

  const onCardNumbersChange = (inputValue: string, targetIndex: number) => {
    setCardInformation((prev) => {
      const cardNumbers: CardInformation["cardNumbers"] = [...prev.cardNumbers];
      cardNumbers[targetIndex] = inputValue;
      return { ...prev, cardNumbers };
    });
  };

  const onCardIssuerChange = (inputValue: CardIssuer) => {
    setCardInformation((prev) => ({ ...prev, cardIssuer: inputValue }));
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

  const onCardCVCChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardCVC: inputValue }));
  };

  const onCardPasswordChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardPassword: inputValue }));
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} isFlipped={isCVCFocused} />
      <CardInformationContainer>
        <CardPasswordInput
          cardPassword={cardInformation.cardPassword}
          onChange={onCardPasswordChange}
        />
        <CardCVCInput
          cardCVC={cardInformation.cardCVC}
          onChange={onCardCVCChange}
          onFocus={() => setIsCVCFocused(true)}
          onBlur={() => setIsCVCFocused(false)}
        />
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
