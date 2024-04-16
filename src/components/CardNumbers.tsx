import React, { useState } from "react";
import Input from "./Input";

export default function CardNumbers() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

  const inputHandler = (inputValue: string, index: number) => {
    setCardNumbers((prev) => {
      const next = [...prev];
      next[index] = inputValue;
      return next;
    });
  };

  return (
    <>
      <h2>결제할 카드 번호를 입력해 주세요</h2>
      <span>본인 명의의 카드만 결제 가능합니다.</span>
      <div>카드 번호</div>
      {cardNumbers.map((_, idx) => {
        return (
          <Input
            idx={idx}
            maxLength={4}
            placeholder="1234"
            inputHandler={inputHandler}
          ></Input>
        );
      })}
    </>
  );
}
