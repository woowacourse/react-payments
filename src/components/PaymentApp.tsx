import styled from "styled-components";
import { useState } from "react";

import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";
import CardBackPreview from "./Card/CardBackPreview";

const PaymentApp = () => {
  const [isFrontCardPreview, setIsFrontCardPreview] = useState(true);

  const [cardNumbers, setCardNumbers] = useState<Map<string, string>>(
    new Map()
  );
  const [cardCompany, setCardCompany] = useState("");

  const [expirationDate, setExpirationDate] = useState<Map<string, string>>(
    new Map()
  );
  const [userName, setUserName] = useState<Map<string, string>>(new Map());
  const [CVCNumber, setCVCNumber] = useState<Map<string, string>>(new Map());
  const [password, setPassword] = useState<Map<string, string>>(new Map());

  return (
    <PaymentAppStyled>
      {isFrontCardPreview ? (
        <CardPreview
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          userName={userName}
          cardCompany={cardCompany}
        />
      ) : (
        <CardBackPreview CVCNumber={CVCNumber}></CardBackPreview>
      )}

      <Form
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
        setUserName={setUserName}
        setCardCompany={setCardCompany}
        setCVCNumber={setCVCNumber}
        setIsFrontCardPreview={setIsFrontCardPreview}
        setPassword={setPassword}
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
