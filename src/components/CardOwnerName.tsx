import React from "react";
import Input from "./Input";

interface Props {
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardOwnerName({ inputHandler }: Props) {
  return (
    <>
      <h2>카드 소유자 이름을 입력해 주세요</h2>
      <div>소유자 이름</div>
      <Input
        maxLength={50}
        placeholder="JOHN DOE"
        inputHandler={(value) => inputHandler(value, "cardOwnerName")}
      />
    </>
  );
}
