import { ChangeEvent, useState } from "react";

import Input from "../../common/CardInfoInput";

import { nowStatus } from "../../../type";
import { makeAppropriateNumber } from "../../../util/trans";

import "./cardNumber.css";
import { PLACE_HOLDER } from "../../../constant/message";
import { INPUT_LENGTH_LIMIT } from "../../../constant/etc";

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
      const userInputNumber = e.target.value.slice(
        0,
        INPUT_LENGTH_LIMIT.MAX_EACH_CARD_NUMBER
      );
      const appropriateNumber = makeAppropriateNumber(userInputNumber);

      if (userInputNumber !== appropriateNumber) {
        changeEachNumberStatus(partIndex, 0);
      } else if (
        appropriateNumber.length === INPUT_LENGTH_LIMIT.MAX_EACH_CARD_NUMBER
      ) {
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
          inputPlace="essential"
          key={`card-number-${index + 1}`}
          name={`card-number-${index + 1}`}
          className={`input-card-number card-number-${index + 1}`}
          type={index === 1 || index === 2 ? "password" : "text"}
          onChange={onChangeCardNumber(index)}
          placeholder={PLACE_HOLDER.CARD_NUMBER}
          value={cardNumber[index]}
        />
      ))}
    </>
  );
}
