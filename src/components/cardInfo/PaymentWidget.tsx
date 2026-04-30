import { useState } from "react";
import CardInfo from "./CardInfo";
import CardPreview from "./CardPreview";
import styled from "@emotion/styled";

export default function PaymentWidget() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [cvcNumber, setCvcNumber] = useState([""]);

  return (
    <CardPaymentWidgetWrapper>
      <CardPreview
        cardNumber={cardNumber}
        expireDate={expireDate}
      ></CardPreview>
      <CardInfo
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        cvcNumber={cvcNumber}
        setCvcNumber={setCvcNumber}
      />
    </CardPaymentWidgetWrapper>
  );
}

const CardPaymentWidgetWrapper = styled.div`
  background-color: white;
  width: 376px;
  border-radius: 10px;
`;
