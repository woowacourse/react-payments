import { useState } from "react";
import CardPreview from "../cardPreview/CardPreview";
import CardNumber from "../cardInfo/cardNumber/CardNumber";
import ExpireDate from "../cardInfo/expireDate/ExpireDate";

export default function CardTopSection() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState({ month: "", year: "" });

  return (
    <>
      <CardPreview cardNumber={cardNumber} expireDate={expireDate} />
      <CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpireDate expireDate={expireDate} setExpireDate={setExpireDate} />
    </>
  );
}
