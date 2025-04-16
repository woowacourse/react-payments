import { useState } from "react";

export default function useCvcNumber() {
  const [cvcNumbers, setCardCvcNumbers] = useState("");
  const [cvcNumbersError, setError] = useState("");

  const cvcNumbersValidate = (value: string) => {
    setCardCvcNumbers(value.slice(0, 4));
    const isValidLength = value.length <= 3;
    const isNumber = /^[0-9]*$/.test(value);
    if (!isValidLength) {
      setError("CVC 번호는 3자리 숫자여야 합니다.");
      return;
    }
    if (!isNumber) {
      setError("숫자만 입력 가능합니다.");
      return;
    }
    setError("");
  };

  return { cvcNumbers, cvcNumbersError, cvcNumbersValidate };
}
