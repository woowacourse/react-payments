import React, { useState } from "react";
import Input from "./Input";

export default function CardExpirationDate() {
  const [cardExpirationDate, setCardDate] = useState({
    cardExpirationMonth: "",
    cardExpirationYear: "",
  });

  const inputHandler = (inputValue: string, inputId: string) => {
    setCardDate((prev) => ({
      ...prev,
      [inputId]: inputValue,
    }));

    console.log(cardExpirationDate);
  };

  return (
    <>
      <h2>카드 유효기간을 입력해 주세요</h2>
      <span>월/년도(MMYY)를 순서대로 입력해 주세요.</span>
      <div>유효기간</div>
      <Input
        maxLength={2}
        placeholder="MM"
        inputHandler={(value) => inputHandler(value, "cardExpirationMonth")}
      />
      <Input
        maxLength={2}
        placeholder="YY"
        inputHandler={(value) => inputHandler(value, "cardExpirationYear")}
      />
    </>
  );
}
