import "./cardNumber.css";

import { ChangeEvent, useState } from "react";
import Input from "../../common/Input";
import { makeAppropriateNumber } from "../../../trans";
import { nowStatus } from "../../../type";

interface CardNumberProps {
  changeHasError: (partIndex: number, state: nowStatus) => void;
  changeCardNumberStatus: (
    key: "isComplete" | "userInput",
    value: any,
    index?: number
  ) => void;
}

export default function CardNumber({
  changeHasError,
  changeCardNumberStatus,
}: CardNumberProps) {
  const [cardNumber, setCardNumber] = useState<string[]>([]);

  const onChangeCardNumber = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userInputNumber = e.target.value.slice(0, 4);
      const appropriateNumber = makeAppropriateNumber(userInputNumber);

      if (userInputNumber !== appropriateNumber) {
        changeHasError(partIndex, 0);
      } else if (appropriateNumber.length === 4) {
        changeHasError(partIndex, 2);
        changeCardNumberStatus("userInput", appropriateNumber, partIndex);
      } else {
        changeHasError(partIndex, 1);
      }

      const result = [...cardNumber];
      result[partIndex] = appropriateNumber;
      setCardNumber(result);
    };
  };

  return (
    <>
      <Input
        name="card-number-1"
        className="first input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(0)}
        placeholder="XXXX"
        value={cardNumber[0]}
      />
      <Input
        name="card-number-2"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(1)}
        placeholder="XXXX"
        value={cardNumber[1]}
      />
      <Input
        name="card-number-3"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(2)}
        placeholder="XXXX"
        value={cardNumber[2]}
      />
      <Input
        name="card-number-4"
        className="last input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(3)}
        placeholder="XXXX"
        value={cardNumber[3]}
      />
    </>
  );
}
