import React, { useState } from "react";
import Input from "./Input";

export default function CardNumbers() {
  const [cardNumbers, setCardNumbers] = useState({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
  });

  const inputHandler = (inputValue: string, inputId: string) => {
    setCardNumbers((prev) => ({
      ...prev,
      [inputId]: inputValue,
    }));

    console.log(cardNumbers);
  };

  return (
    <>
      <h2>결제할 카드 번호를 입력해 주세요</h2>
      <span>본인 명의의 카드만 결제 가능합니다.</span>
      <div>카드 번호</div>
      <Input
        maxLength={4}
        placeholder="1234"
        inputHandler={(value) => inputHandler(value, "cardNumber1")}
      />
      <Input
        maxLength={4}
        placeholder="1234"
        inputHandler={(value) => inputHandler(value, "cardNumber2")}
      />
      <Input
        maxLength={4}
        placeholder="1234"
        inputHandler={(value) => inputHandler(value, "cardNumber3")}
      />
      <Input
        maxLength={4}
        placeholder="1234"
        inputHandler={(value) => inputHandler(value, "cardNumber4")}
      />
    </>
  );
}
