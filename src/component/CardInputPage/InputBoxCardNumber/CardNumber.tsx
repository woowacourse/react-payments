import { ChangeEvent, useState, useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";

import "./cardNumber.css";
import { CreditCard } from "../../../type";

interface Props {
  setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>;
  setInputStatus: React.Dispatch<React.SetStateAction<number>>;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

const INPUT_STATUS = {
  ERROR: 0,
  NOT_COMPLETE: 1,
  COMPLETE: 2,
};

export default function CardNumber(props: Props) {
  const [inputStatus1, setInputStatus1] = useState(INPUT_STATUS.NOT_COMPLETE);
  const [inputStatus2, setInputStatus2] = useState(INPUT_STATUS.NOT_COMPLETE);
  const [inputStatus3, setInputStatus3] = useState(INPUT_STATUS.NOT_COMPLETE);
  const [inputStatus4, setInputStatus4] = useState(INPUT_STATUS.NOT_COMPLETE);

  const { setInputStatus, setIsComplete, changeNowCardInfo } = props;

  useEffect(() => {
    const hasError = [
      inputStatus1,
      inputStatus2,
      inputStatus3,
      inputStatus4,
    ].includes(INPUT_STATUS.ERROR);

    hasError
      ? setInputStatus(INPUT_STATUS.ERROR)
      : setInputStatus(INPUT_STATUS.NOT_COMPLETE);

    const isComplete = [
      inputStatus1,
      inputStatus2,
      inputStatus3,
      inputStatus4,
    ].every((status) => status === INPUT_STATUS.COMPLETE);

    setIsComplete(isComplete);
  }, [inputStatus1, inputStatus2, inputStatus3, inputStatus4]);

  const onChangeCardNumber =
    (
      setInputStatus: React.Dispatch<React.SetStateAction<number>>,
      partIndex: number
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 4) {
        e.target.value = value.slice(0, 4);
      }

      if (validateCardNumber(e.target.value)) {
        setInputStatus(
          e.target.value.length === 4
            ? INPUT_STATUS.COMPLETE
            : INPUT_STATUS.NOT_COMPLETE
        );
        e.target.value.length === 4 &&
          changeNowCardInfo("number", e.target.value, partIndex);
      } else {
        setInputStatus(INPUT_STATUS.ERROR);
      }
    };

  return (
    <>
      <Input
        name="card-number-1"
        className="first input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(setInputStatus1, 0)}
        placeholder="XXXX"
      />
      <Input
        name="card-number-2"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(setInputStatus2, 1)}
        placeholder="XXXX"
      />
      <Input
        name="card-number-3"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(setInputStatus3, 2)}
        placeholder="XXXX"
      />
      <Input
        name="card-number-4"
        className="last input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(setInputStatus4, 3)}
        placeholder="XXXX"
      />
    </>
  );
}
