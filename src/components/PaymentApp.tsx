import styled from "styled-components";
import { useState } from "react";

import Form from "./Form/Form";
import CardPreview from "./Card/CardPreview";

const Styled = {
  PaymentAppWrapper: styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
};

const PaymentApp = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState<string[]>(["", ""]);
  const [userName, setUserName] = useState<string[]>([""]);

  return (
    <Styled.PaymentAppWrapper>
      <CardPreview cardNumbers={cardNumbers} expirationDate={expirationDate} userName={userName} />
      <Form
        {...{ cardNumbers, setCardNumbers }}
        {...{ expirationDate, setExpirationDate }}
        {...{ userName, setUserName }}
      />
    </Styled.PaymentAppWrapper>
  );
};

export default PaymentApp;
