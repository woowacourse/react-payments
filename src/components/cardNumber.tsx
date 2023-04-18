import { useEffect, useState } from "react";
import { InputBox } from "./common/InputBox";

export function CardNumber() {
  const [cardNumber, setCardNumber] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setCardNumber(target.value);
  }

  return (
    <InputBox labelText="카드 번호" handleChange={handleChange}></InputBox>
  );
}
