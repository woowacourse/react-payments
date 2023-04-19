import { ChangeEvent, useState, useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";

import "./cardNumber.css";

interface Props {
  setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardNumber(props: Props) {
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);

  const { setError } = props;

  useEffect(() => {
    setError(error1 || error2 || error3 || error4);
  }, [error1, error2, error3, error4]);

  const onChangeCardNumber =
    (setError: React.Dispatch<React.SetStateAction<boolean>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 4) {
        e.target.value = value.slice(0, 4);
      }

      if (validateCardNumber(e.target.value)) setError(false);
      else setError(true);
    };

  return (
    <>
      <Input
        className="first input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(setError1)}
        placeholder="X X X X"
      />
      <Input
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(setError2)}
        placeholder="X X X X"
      />
      <Input
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber(setError3)}
        placeholder="X X X X"
      />
      <Input
        className="last input-card-number"
        type="text"
        inputMode="numeric"
        onChange={onChangeCardNumber(setError4)}
        placeholder="X X X X"
      />
    </>
  );
}
