import { Dispatch, SetStateAction } from "react";
import Input from "./Input";
import { CARD_NUMBER_UNIT_PLACEHOLDER } from "../constants";

export default function CardNumbersInputField({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  const handleChange = (e, index) => {
    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = e.target.value;
    setCardNumbers(updatedCardNumbers);
  };

  return (
    <>
      <div>카드 번호</div>
      {cardNumbers.map((cardNumber, i) => (
        <Input
          onChange={(e) => handleChange(e, i)}
          placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
          maxLength={4}
        />
      ))}
      <div>에러메세지</div>
    </>
  );
}
