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
  const [month, setMonthValue, setMonthIsError, setMonthIsDone] = useInput();
  const [year, setYearValue, setYearIsError, setYearIsDone] = useInput();
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
      setMonthIsError(true);
      setErrorMessage(ERRORS.isNotInteger);
      return;
    } else if (value.length === EXPIRATION_DATE_MAX_LENGTH && !isValidMonth(value)) {
      setMonthIsError(true);
      setMonthIsDone(false);
      setErrorMessage(ERRORS.isNotValidMonth);
      return;
    }
    setMonthValue(value);
    setMonthIsError(false);
    setMonthIsDone(value.length === EXPIRATION_DATE_MAX_LENGTH);
    setErrorMessage("");
  };

  const changeYear = (value: string) => {
    if (!isNumberString(value)) {
      setYearIsError(false);
      setErrorMessage(ERRORS.isNotInteger);
      return;
    } else if (
      value.length === EXPIRATION_DATE_MAX_LENGTH &&
      !isValidDate({ year: value, month: month.value })
    ) {
      setYearIsError(true);
      setYearIsDone(false);
      setErrorMessage(ERRORS.deprecatedCard);
      return;
    }
    setYearValue(value);
    setYearIsError(false);
    setYearIsDone(value.length === EXPIRATION_DATE_MAX_LENGTH);
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
