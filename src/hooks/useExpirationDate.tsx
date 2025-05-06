import { useState } from "react";
import { Action, ErrorAction } from "../types/CardInformationType";
import { Dispatch } from "react";
import isMonth from "../utils/isMonth";
import isTypeNumber from "../utils/isTypeNumber";

const useExpirationDate = ({
  dispatch,
  inputRefs,
  openNextForm,
  expirationDateState,
  dispatchError,
}: {
  dispatch: Dispatch<Action>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  openNextForm: () => void;
  expirationDateState: string[];
  dispatchError: Dispatch<ErrorAction>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string, index: number) => {
    const current = new Date();
    const currentYear = current.getFullYear() % 100;
    const currentMonth = current.getMonth() + 1;

    if (!isTypeNumber(v)) {
      dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: true });
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: false });
    dispatch({ type: "SET_EXPIRATION_DATE", index: index, value: v });

    if (index === 0) {
      const year = expirationDateState[1];
      const month = Number(v);

      if (!isMonth(Number(v))) {
        dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: true });
        setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
        return;
      }

      if (year !== "" && Number(year) === currentYear && month < currentMonth) {
        dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: true });
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
        dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: true });
        setErrorMessage("유효 기간이 만료된 카드입니다.");
        return;
      }

      if (month !== "" && currentMonth > Number(month) && year === currentYear) {
        dispatchError({ type: "SET_EXPIRATION_DATE_ERROR", index, value: true });
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

  return { errorMessage, handleChange };
};

export default useExpirationDate;
