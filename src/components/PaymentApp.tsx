import styled from "styled-components";
import { useState } from "react";

import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";

const PaymentApp = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState<string[]>(["", ""]);
  const [userName, setUserName] = useState<string[]>([""]);

  return (
    <PaymentAppStyled>
      <CardPreview cardNumbers={cardNumbers} expirationDate={expirationDate} userName={userName} />
      <Form
        {...{ cardNumbers, setCardNumbers }}
        {...{ expirationDate, setExpirationDate }}
        {...{ userName, setUserName }}
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
