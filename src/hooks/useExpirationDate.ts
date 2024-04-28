import { CARD_EXPIRATION_DATE_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isValidDate, isValidMonth } from "@/utils/validators";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { getInputAttributes } from "@/utils/input";
import useInput from "./useInput";
import { EXPIRATION_DATE_MAX_LENGTH } from "@/constants/cardInfo";
import { isNumberString } from "@/utils/input";

const useExpirationDate = () => {
  const [nextInput, setShowNextInput] = useState<boolean>(false);
  const [month, setMonth] = useInput();
  const [year, setYear] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (month.isDone && !month.isError) yearRef.current?.focus();
    if (year.isDone && !year.isError) yearRef.current?.blur();
    if (month.isDone && !month.isError && year.isDone && !year.isError) setShowNextInput(true);
  }, [month, year]);

  const changeMonth = (value: string) => {
    if (!isNumberString(value)) {
      setMonth({ ...month, isError: true });
      setErrorMessage(ERRORS.isNotInteger);
      return;
    } else if (value.length === EXPIRATION_DATE_MAX_LENGTH && !isValidMonth(value)) {
      setMonth({ ...month, isError: true, isDone: false });
      setErrorMessage(ERRORS.isNotValidMonth);
      return;
    }
    setMonth({ value, isError: false, isDone: value.length === EXPIRATION_DATE_MAX_LENGTH });
    setErrorMessage("");
  };

  const changeYear = (value: string) => {
    if (!isNumberString(value)) {
      setYear({ ...month, isError: true });
      setErrorMessage(ERRORS.isNotInteger);
      return;
    } else if (
      value.length === EXPIRATION_DATE_MAX_LENGTH &&
      !isValidDate({ year: value, month: month.value })
    ) {
      setYear({ value, isError: true, isDone: false });
      setErrorMessage(ERRORS.deprecatedCard);
      return;
    }
    setYear({ value, isError: false, isDone: value.length === EXPIRATION_DATE_MAX_LENGTH });
    setErrorMessage("");
  };

  const changeExpirationDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_EXPIRATION_DATE_KEYS);

    if (name === "month") changeMonth(value);
    else if (name === "year") changeYear(value);
  };

  return {
    expirationDate: { month, year },
    changeExpirationDate,
    errorMessage,
    nextInput,
    refs: { monthRef, yearRef },
  };
};

export default useExpirationDate;
