import React, { useState } from "react";
import Input from "./Input";

export default function CardOwnerName() {
  const [cardOwnerName, setCardOwnerName] = useState("");

  const inputHandler = (inputValue: string) => {
    setCardOwnerName(inputValue);

    console.log(cardOwnerName);
  };

  return (
    <>
      <h2>카드 소유자 이름을 입력해 주세요</h2>
      <div>소유자 이름</div>
      <Input
        maxLength={50}
        placeholder="JOHN DOE"
        inputHandler={(value) => inputHandler(value)}
      />
    </>
  );
}
