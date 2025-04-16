import { useState } from "react";

export default function useExpirationDate() {
  const [cardExpirationDate, setcardExpirationDate] = useState(["", ""]);
  const [cardExpirationDateError, setError] = useState(["", ""]);

  const dateValidate = (value: string, index: number) => {
    const newDate = [...cardExpirationDate];
    newDate[index] = value.slice(0, 2);
    setcardExpirationDate(newDate);

    const isNumber = /^[0-9]*$/.test(value);
    const isValidLength = value.length <= 2;

    const newError = [...cardExpirationDateError];

    if (!isValidLength) {
      newError[index] = "2자리까지 입력 가능합니다.";
      setError(newError);
      return;
    }

    if (!isNumber) {
      newError[index] = "숫자만 입력 가능합니다.";
      setError(newError);
      return;
    }

    if (index === 0 && value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        newError[index] = "1부터 12 사이의 숫자를 입력하세요.";
        setError(newError);
        return;
      }
    }

    newError[index] = "";
    setError(newError);
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    dateValidate,
  };
}
