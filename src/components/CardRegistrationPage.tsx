import styled from "styled-components";
import { useState } from "react";
import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";
import { CardCompany } from "../types/card";

const Styled = {
  CardRegistrationPageLayout: styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
};

const CardRegistrationPage = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState<string[]>(["", ""]);
  const [cardOwner, setCardOwner] = useState<string[]>([""]);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [cardCVC, setCardCVC] = useState<string[]>([""]);
  const [cardPassword, setCardPassword] = useState<string[]>([""]);

  const [focusedField, setFocusedField] = useState("");

  return (
    <Styled.CardRegistrationPageLayout>
      <CardPreview
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        cardOwner={cardOwner}
        cardCompany={cardCompany}
        cardCVC={cardCVC}
        cardPassword={cardPassword}
        focusedField={focusedField}
      />
      <Form
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        cardOwner={cardOwner}
        cardCompany={cardCompany}
        cardCVC={cardCVC}
        cardPassword={cardPassword}
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
        setCardOwner={setCardOwner}
        setCardCompany={setCardCompany}
        setCardCVC={setCardCVC}
        setCardPassword={setCardPassword}
        setFocusedField={setFocusedField}
      />
    </Styled.CardRegistrationPageLayout>
  );
};

export default CardRegistrationPage;
