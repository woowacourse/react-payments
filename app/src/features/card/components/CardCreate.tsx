import { useState } from "react";
import { CardPreview } from "./preview/CardPreview.tsx";
import { CardForm } from "./form/CardForm.tsx";
import styled from "@emotion/styled";

export default function CardCreate() {
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

  const [cardBrand, setCardBrand] = useState(null);

  const [cardCVC, setCardCVC] = useState("");

  const [cardPassword, setCardPassword] = useState("");

  return (
    <CardContainer>
      <CardPreview
        cardNumber={cardNumber}
        cardExpiryDate={cardExpiryDate}
        cardBrand={cardBrand}
      />
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiryDate={cardExpiryDate}
        setCardExpiryDate={setCardExpiryDate}
        cardBrand={cardBrand}
        setCardBrand={setCardBrand}
        cardCVC={cardCVC}
        setCardCVC={setCardCVC}
        cardPassword={cardPassword}
        setCardPassword={setCardPassword}
      />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
