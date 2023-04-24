import { ChangeEvent, useState, useEffect, useReducer } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";

import "./cardNumber.css";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
  setPreviewDataHandler: () => void;
}

export default function CardNumber(props: Props) {
  const { setError, setIsComplete, setPreviewDataHandler } = props;

  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(4);

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete]);

  const getOnChangeCardNumberHandler =
    (setInputStatus: (status: INPUT_STATUS) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > CONSTANT.NUMBER_INPUT_MAX_LENGTH) {
        e.target.value = value.slice(0, CONSTANT.NUMBER_INPUT_MAX_LENGTH);
      }

      if (validateCardNumber(e.target.value)) {
        setInputStatus(
          e.target.value.length === CONSTANT.NUMBER_INPUT_MAX_LENGTH
            ? INPUT_STATUS.COMPLETE
            : INPUT_STATUS.NOT_COMPLETE
        );
      } else {
        setInputStatus(INPUT_STATUS.ERROR);
      }

      setPreviewDataHandler();
    };

  return (
    <>
      <Input
        name="card-number-1"
        className="first input-card-number"
        type="text"
        inputMode="numeric"
        onChange={getOnChangeCardNumberHandler(getSetStateFunction(0))}
        placeholder="XXXX"
      />
      <Input
        name="card-number-2"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={getOnChangeCardNumberHandler(getSetStateFunction(1))}
        placeholder="XXXX"
      />
      <Input
        name="card-number-3"
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={getOnChangeCardNumberHandler(getSetStateFunction(2))}
        placeholder="XXXX"
      />
      <Input
        name="card-number-4"
        className="last input-card-number"
        type="text"
        inputMode="numeric"
        onChange={getOnChangeCardNumberHandler(getSetStateFunction(3))}
        placeholder="XXXX"
      />
    </>
  );
}
