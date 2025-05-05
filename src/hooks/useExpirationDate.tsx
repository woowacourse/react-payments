import { useState } from "react";
import { Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isMonth from "../utils/isMonth";
import isTypeNumber from "../utils/isTypeNumber";

const useExpirationDate = ({
  dispatch,
  inputRefs,
  openNextForm,
  expirationDateState,
}: {
  dispatch: Dispatch<Action>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  openNextForm: () => void;
  expirationDateState: string[];
}) => {
  const [error, setError] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string, index: number) => {
    const current = new Date();
    const currentYear = current.getFullYear() % 100;
    const currentMonth = current.getMonth() + 1;

    if (!isTypeNumber(v)) {
      const updatedError = [...error];
      updatedError[index] = true;
      setError(updatedError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    const updatedError = [...error];
    updatedError[index] = false;
    setError(updatedError);
    dispatch({ type: "SET_EXPIRATION_DATE", index: index, value: v });

    if (index === 0) {
      const year = expirationDateState[1];
      const month = Number(v);

      if (!isMonth(Number(v))) {
        const updatedError = [...error];
        updatedError[index] = true;
        setError(updatedError);
        setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
        return;
      }

      if (year !== "" && Number(year) === currentYear && month < currentMonth) {
        const updatedError = [...error];
        updatedError[index] = true;
        setError(updatedError);
        setErrorMessage("유효 기간이 만료된 카드입니다.");
        return;
      }

      if (expirationDateState[0] !== "" && expirationDateState[1] !== "") {
        openNextForm();
      }
    }

    if (index === 1) {
      const year = Number(v);
      const month = expirationDateState[0];

      if (year < currentYear) {
        const updatedError = [...error];
        updatedError[index] = true;
        setError(updatedError);
        setErrorMessage("유효 기간이 만료된 카드입니다.");
        return;
      }

      if (month !== "" && currentMonth > Number(month) && year === currentYear) {
        const updatedError = [...error];
        updatedError[index] = true;
        setError(updatedError);
        setErrorMessage("유효 기간이 만료된 카드입니다.");
        return;
      }

      if (expirationDateState[0] !== "" && expirationDateState[1] !== "") {
        openNextForm();
      }
    }

    if (v.length === 2 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    return;
  };

  return { error, errorMessage, handleChange };
};

export default useExpirationDate;
