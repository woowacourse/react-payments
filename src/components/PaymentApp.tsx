import styled from "styled-components";
import { useState } from "react";

import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";

export interface ICardInfo {
  index: string;
  currentValue: string;
}

const PaymentApp = () => {
  const [cardNumbers, setCardNumbers] = useState<Map<string, string>>(
    new Map()
  );
  const [expirationDate, setExpirationDate] = useState<ICardInfo[]>([]);
  const [userName, setUserName] = useState<ICardInfo[]>([]);

  return (
    <PaymentAppStyled>
      <CardPreview
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        userName={userName}
      />
      <Form
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
        setUserName={setUserName}
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
