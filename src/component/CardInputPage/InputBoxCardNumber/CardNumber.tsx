import { ChangeEvent, useState, useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";

import "./cardNumber.css";
import { CreditCard } from "../../../type";

interface Props {
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  changeCardNumberStatus: (key: "isComplete" | "userInput", value: any) => void;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

const makeAppropriateNumber = (userInput: string) => {
  if (userInput === "") return "";

  const result = userInput.split("").filter(validateCardNumber);
  return 1 <= result.length && result.length <= 4
    ? result.join("")
    : result.slice(0, 4).join("");
};

export default function CardNumber({
  setHasError,
  changeCardNumberStatus,
  changeNowCardInfo,
}: Props) {
  const [cardNumber, setCardNumber] = useState<string[]>([]);

  const onChangeCardNumber = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userInputNumber = e.target.value;
      const appropriateNumber = makeAppropriateNumber(userInputNumber);

      if (
        userInputNumber !== appropriateNumber &&
        appropriateNumber.length !== 4
      ) {
        setHasError(true);
        changeCardNumberStatus("isComplete", 0);
      } else {
        setHasError(false);
        changeCardNumberStatus(
          "isComplete",
          appropriateNumber.length === 4 ? 2 : 1
        );
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
