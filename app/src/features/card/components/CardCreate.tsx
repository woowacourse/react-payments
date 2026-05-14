import { useState } from "react";
import { CardPreview } from "./preview/CardPreview.tsx";
import { CardForm } from "./form/CardForm.tsx";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

export default function CardCreate() {
  const [cardNumber, setCardNumber] = useState({
    firstDigits: "",
    secondDigits: "",
    thirdDigits: "",
    fourthDigits: "",
  });

  const [cardExpiryDate, setCardExpiryDate] = useState({
    expiryMonth: "",
    expiryYear: "",
  });

  const [cardBrand, setCardBrand] = useState<string | null>(null);

  const [cardCVC, setCardCVC] = useState("");

  const [cardPassword, setCardPassword] = useState("");

  const navigate = useNavigate();

  const gotoCreateCardDonePage = () => {
    navigate("/card/done", {
      state: { firstDigitsCardNumber: cardNumber.firstDigits, cardBrand },
    });
  };

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
        gotoCreateCardDonePage={gotoCreateCardDonePage}
      />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
