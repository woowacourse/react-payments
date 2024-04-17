import { Dispatch, SetStateAction } from "react";
import Input from "./Input";

export default function CardNumbersInputField({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <>
      <div>카드 번호</div>
      {cardNumbers.map((cardNumber) => (
        <Input placeholder="1234" />
      ))}
      <div>에러메세지</div>
    </>
  );
}
