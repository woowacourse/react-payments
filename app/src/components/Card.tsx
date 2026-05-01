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
  networkBrand: string;
  setCardNumber: React.Dispatch<React.SetStateAction<CardNumberType>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardExpiryDateType>>;
  setNetworkBrand: React.Dispatch<React.SetStateAction<string>>;
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

  const [networkBrand, setNetworkBrand] = useState("");

  return (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        networkBrand,
        setCardNumber,
        setCardExpiryDate,
        setNetworkBrand,
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
