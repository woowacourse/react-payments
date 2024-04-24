import styled from "styled-components";
import { useState, useEffect } from "react";

import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";

const PaymentApp = () => {
  const [cardNumbers, setCardNumbers] = useState<Map<string, string>>(
    new Map()
  );
  const [cardCompany, setCardCompany] = useState("");
  // const [CVCNumber, setCVCNumber] =  useState('');
  // const [password, setPassword] = useState('');

  const [expirationDate, setExpirationDate] = useState<Map<string, string>>(
    new Map()
  );
  const [userName, setUserName] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    console.log(cardCompany);
  });

  return (
    <PaymentAppStyled>
      <CardPreview
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        userName={userName}
        cardCompany={cardCompany}
      />
      <Form
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
        setUserName={setUserName}
        setCardCompany={setCardCompany}
      />
    </PaymentAppStyled>
  );
};

const PaymentAppStyled = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default PaymentApp;
