import React, { useState } from "react";
import { FirstPassword, SecondPassword } from "../types/card";

function useWarningText(minLength?: number, regExp?: RegExp, name?: string) {
  const [warningText, setWarningText] = useState("");

  const checkNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = e.target.value;
    const lastNumber = inputNumber.slice(-1);
    setWarningText("");

    if (isNaN(parseInt(lastNumber)) && !["-", "•", "/"].includes(lastNumber)) {
      setWarningText("숫자만 입력이 가능합니다.");
      return;
    }
    if (name === "date") {
      checkRightMonth(inputNumber);
    }
  };

  const checkRightLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWarningText("");
    let inputNumber = e.target.value;
    if (regExp) inputNumber = inputNumber.replace(regExp, "");

    if (minLength ? inputNumber.length < minLength : 0) {
      name === "date"
        ? setWarningText(`카드 유효기간은 MM/YY 형식이어야 합니다.`)
        : setWarningText(`입력 숫자는 ${minLength}자 이어야 합니다`);
    }
    if (name === "date") checkRightMonth(inputNumber);
  };

  const checkRightMonth = (inputNumber: string) => {
    const month = inputNumber.slice(0, 2);

    if (parseInt(month) > 12 || month == "00") {
      setWarningText("잘못된 달을 입력했습니다. 유효한 달을 입력해주세요.");
    }
  };

  const isRightForm = (
    cardNumberHidden: string,
    cardDate: string,
    cardCVC: string,
    cardPassword: [FirstPassword, SecondPassword]
  ) => {
    let isError = false;
    if (cardNumberHidden.replace(/[^\d•]/g, "").length !== 16) isError = true;
    if (cardDate.replace(/[^\d]/g, "").length !== 4) isError = true;
    if (cardCVC.length !== 3) isError = true;
    if (cardPassword[0].length !== 1 || cardPassword[1].length !== 1)
      isError = true;

    if (isError)
      setWarningText("작성이 완료되지 않은 필수 입력요소가 있습니다.");

    return isError;
  };
  return { warningText, checkNumber, checkRightLength, isRightForm };
}

export default useWarningText;
