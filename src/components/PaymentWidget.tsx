import { useState } from "react";
import CardInfo from "./cardInfo/CardInfo";
import CardPreview from "./cardPreview/CardPreview";
import { CardPaymentWidgetWrapper } from "./PaymentWidget.styles";

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
