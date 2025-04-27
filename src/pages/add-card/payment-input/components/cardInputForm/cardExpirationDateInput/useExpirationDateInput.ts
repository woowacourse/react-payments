import { useState, useRef } from "react";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from "../validator/validateCardInput";
import { getExpirationFirstErrorMessage } from "../validator/getFirstErrorMessage";

export function useExpirationDateInput(
  onSuccessValidate: (isValid: boolean) => void,
  onSuccessNextInput: () => void,
  onExpirationDateChange: (date: string[]) => void
) {
  const [expiration, setExpiration] = useState({
    month: "",
    year: "",
    feedbackMessage: {
      month: "",
      year: "",
    },
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const { name, value } = e.target;

    const next = {
      ...expiration,
      [name]: value,
    };
    const { month: nextMonth, year: nextYear } = next;

    const monthValidator = validateExpirationDateMonth(nextMonth, nextYear);
    const yearValidator = validateExpirationDateYear(nextMonth, nextYear);

    const monthError = getExpirationFirstErrorMessage(monthValidator, "MONTH");
    const yearError = getExpirationFirstErrorMessage(yearValidator, "YEAR");

    setExpiration({
      month: nextMonth,
      year: nextYear,
      feedbackMessage: {
        month: monthError,
        year: yearError,
      },
    });

    onExpirationDateChange([nextMonth, nextYear]);

    if (value.length === 2 && i !== 1) {
      inputRefs.current[i + 1]?.focus();
    } else if (
      value.length === 2 &&
      i === 1 &&
      monthError === "" &&
      yearError === ""
    ) {
      onSuccessValidate(true);
      onSuccessNextInput();
    } else if (value.length < 2 || (monthError !== "" && yearError !== "")) {
      onSuccessValidate(false);
    }
  }

  return {
    expiration,
    onChangeHandler,
    inputRefs,
  };
}
