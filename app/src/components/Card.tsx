import { createContext, useState } from "react";
import { CardPreview } from "./preview/CardPreview.tsx";
import { CardForm } from "./form/CardForm.tsx";
import styled from "@emotion/styled";

interface CardExpiryDateType {
  "expiry-month": string;
  "expiry-year": string;
}

interface CardNumberType {
  "first-digits": string;
  "second-digits": string;
  "third-digits": string;
  "fourth-digits": string;
}

interface CardContextType {
  cardNumber: CardNumberType;
  cardExpiryDate: CardExpiryDateType;
  setCardNumber: React.Dispatch<React.SetStateAction<CardNumberType>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardExpiryDateType>>;
}

export const CardContext = createContext<CardContextType>(null!);

export function Card() {
  const [cardNumber, setCardNumber] = useState({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  });

  const [cardExpiryDate, setCardExpiryDate] = useState({
    "expiry-month": "",
    "expiry-year": "",
  });

  return (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        setCardNumber,
        setCardExpiryDate,
      }}
    >
      <CardContainer>
        <CardPreview />
        <CardForm />
      </CardContainer>
    </CardContext>
  );
}

const CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
