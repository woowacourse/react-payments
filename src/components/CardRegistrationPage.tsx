import styled from "styled-components";
import { useState } from "react";
import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";

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
  const [userName, setUserName] = useState<string[]>([""]);
  const [cardCompany, setCardCompany] = useState<string[]>([""]);
  const [cardCVC, setCardCVC] = useState<string[]>([""]);
  const [cardPassword, setCardPassword] = useState<string[]>([""]);

  const [focusedField, setFocusedField] = useState("");

  return (
    <Styled.CardRegistrationPageLayout>
      <CardPreview
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        userName={userName}
        cardCompany={cardCompany}
        cardCVC={cardCVC}
        cardPassword={cardPassword}
        focusedField={focusedField}
      />
      <Form
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        userName={userName}
        cardCompany={cardCompany}
        cardCVC={cardCVC}
        cardPassword={cardPassword}
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
        setUserName={setUserName}
        setCardCompany={setCardCompany}
        setCardCVC={setCardCVC}
        setCardPassword={setCardPassword}
        setFocusedField={setFocusedField}
      />
    </Styled.CardRegistrationPageLayout>
  );
};

export default CardRegistrationPage;
