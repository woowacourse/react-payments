import React, { useState } from "react";

function useWarningText(minLength: number, regExp?: RegExp, name?: string) {
  const [warningText, setWarningText] = useState("");

  const isNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = e.target.value;
    const lastNumber = inputNumber.slice(-1);
    setWarningText("");

    if (isNaN(parseInt(lastNumber)) && !["-", "•", "/"].includes(lastNumber)) {
      setWarningText("숫자만 입력이 가능합니다.");
      return;
    }
    if (name === "date") {
      isRightMonth(inputNumber);
    }
  };

  const isRightLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWarningText("");
    let inputNumber = e.target.value;
    if (regExp) inputNumber = inputNumber.replace(regExp, "");

    if (inputNumber.length < minLength) {
      name === "date"
        ? setWarningText(`카드 유효기간은 MM/YY 형식이어야 합니다.`)
        : setWarningText(`입력 숫자는 ${minLength}자 이어야 합니다`);
    }
  };

  const isRightMonth = (inputNumber: string) => {
    const month = inputNumber.slice(0, 2);

    if (parseInt(month) > 12 || month == "00") {
      setWarningText("잘못된 달을 입력했습니다. 유효한 달을 입력해주세요.");
    }
  };

  return { warningText, isNumber, isRightLength };
}

export default useWarningText;
