import { ChangeEvent, useState, useEffect } from "react";
import Input from "../../common/Input";

import "./cardNumber.css";
import { CreditCard } from "../../../type";
import { makeAppropriateNumber } from "../../../trans";

interface Props {
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  changeCardNumberStatus: (key: "isComplete" | "userInput", value: any) => void;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

/* setHasError : inputBoxCardNumber가 에러문구를 출력하기 위해 내려보내는 함수
 * changeCardNumberStatus : {}형태로 에러여부, 현재 카드넘버 정보를 바꾸는 함수
 * changeNowCardInfo : 카드 미리보기를 동기화하기 위해 내려보내는 함수
 */
export default function CardNumber({
  setHasError,
  changeCardNumberStatus,
  changeNowCardInfo,
}: Props) {
  const [cardNumber, setCardNumber] = useState<string[]>([]);

  const onChangeCardNumber = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userInputNumber = e.target.value.slice(0, 4);
      const appropriateNumber = makeAppropriateNumber(userInputNumber);

      if (userInputNumber !== appropriateNumber) {
        setHasError(true);
        changeCardNumberStatus("isComplete", false);
      } else if (appropriateNumber.length === 4) {
        setHasError(false);
        changeCardNumberStatus("isComplete", true);
        changeCardNumberStatus("userInput", appropriateNumber);
        changeNowCardInfo("cardNumber", appropriateNumber);
      } else {
        setHasError(false);
        changeCardNumberStatus("isComplete", false);
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
