import React, { useState } from "react";
import { FirstPassword, SecondPassword } from "../types/card";
import { toHiddenNumber, toOnlyNumber } from "../util/InputUtil";
import { LENGTH, WARNING_TEXT } from "../abstract/constants";

function useWarningText(minLength?: number, name?: string) {
  const [warningText, setWarningText] = useState("");

  const checkNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = e.target.value;
    const lastNumber = inputNumber.slice(-1);
    setWarningText("");

    if (isNaN(parseInt(lastNumber)) && !["-", "•", "/"].includes(lastNumber)) {
      setWarningText(WARNING_TEXT.ONLY_NUMBER);
      return;
    }
    if (name === "date") {
      checkRightMonth(inputNumber);
    }
  };

  const checkRightLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWarningText("");
    let inputNumber = e.target.value;

    if (name === "date") {
      checkDateInput(inputNumber);
      return;
    }
    if (name === "cardNumber") inputNumber = toHiddenNumber(inputNumber);

    if (minLength ? inputNumber.length < minLength : LENGTH.ZERO) {
      setWarningText(`입력 숫자는 ${minLength}자 이어야 합니다`);
    }
  };

  const checkDateInput = (inputNumber: string) => {
    const date = toOnlyNumber(inputNumber);
    if (date.length < LENGTH.DATE) {
      setWarningText(WARNING_TEXT.DATE);
    }
    checkRightMonth(inputNumber);
  };
  const checkRightMonth = (inputNumber: string) => {
    const month = inputNumber.slice(0, LENGTH.DATE_BOUNDARY);

    if (parseInt(month) > 12 || month == "00") {
      setWarningText(WARNING_TEXT.WRONG_MONTH);
    }
  };

  const isRightForm = (
    cardNumberHidden: string,
    cardDate: string,
    cardCVC: string,
    cardPassword: [FirstPassword, SecondPassword]
  ) => {
    let isError = false;
    if (toHiddenNumber(cardNumberHidden).length !== LENGTH.CARD) isError = true;
    if (toOnlyNumber(cardDate).length !== LENGTH.DATE) isError = true;
    if (cardCVC.length !== LENGTH.CVC) isError = true;
    if (
      cardPassword[0].length !== LENGTH.PASSWORD ||
      cardPassword[1].length !== LENGTH.PASSWORD
    )
      isError = true;

    if (isError) setWarningText(WARNING_TEXT.NO_COMPLETED_FORM);

    return isError;
  };
  return { warningText, checkNumber, checkRightLength, isRightForm };
}

export default useWarningText;
