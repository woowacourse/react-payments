import { ChangeEvent, useState } from "react";

import Input from "../../common/Input";

import { nowStatus } from "../../../type";
import { makeAppropriateNumber } from "../../../util/trans";

import "./cardNumber.css";

interface CardNumberProps {
  changeEachNumberStatus: (partIndex: number, state: nowStatus) => void;
  changeCardNumberStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function CardNumber({
  changeEachNumberStatus,
  changeCardNumberStatus,
}: CardNumberProps) {
  const [cardNumber, setCardNumber] = useState<string[]>([]);

  const onChangeCardNumber = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userInputNumber = e.target.value.slice(0, 4);
      const appropriateNumber = makeAppropriateNumber(userInputNumber);

      if (userInputNumber !== appropriateNumber) {
        changeEachNumberStatus(partIndex, 0);
      } else if (appropriateNumber.length === 4) {
        changeEachNumberStatus(partIndex, 2);
        changeCardNumberStatus(true, appropriateNumber, partIndex);
      } else {
        changeEachNumberStatus(partIndex, 1);
      }

      const result = [...cardNumber];
      result[partIndex] = appropriateNumber;
      setCardNumber(result);
    };
  };

  return (
    <>
      {new Array(4).fill(0).map((_, index) => (
        <Input
          name={`card-number-${index + 1}`}
          className={`input-card-number card-number-${index + 1}`}
          type={index === 1 || index === 2 ? "password" : "text"}
          inputMode="numeric"
          onChange={onChangeCardNumber(index)}
          placeholder="XXXX"
          required={true}
          ariaRequired={true}
          value={cardNumber[index]}
        />
      ))}
    </>
  );
}
