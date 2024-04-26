import { CARD_EXPIRATION_DATE_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isValidDate, isValidMonth } from "@/utils/validators";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { getInputAttributes } from "@/utils/input";
import useInput from "./useInput";

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
    if (month.isDone && !month.isError && year.isDone && !year.isError) {
      setShowNextInput(true);
    }
  }, [month, year]);

  const changeExpirationDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(
      event,
      CARD_EXPIRATION_DATE_KEYS
    );

    if (!Number.isInteger(Number(value))) {
      if (name === "month") {
        setMonth({ ...month, isError: true });
      } else if (name === "year") {
        setYear({ ...year, isError: true });
      }
      setErrorMessage(ERRORS.isNotInteger);
      return;
    }

    if (name === "month") {
      if (value.length === 2) {
        setMonth({
          value,
          isError: !isValidMonth(value),
          isDone: isValidMonth(value),
        });
        setErrorMessage(isValidMonth(value) ? "" : ERRORS.isNotValidMonth);
      } else {
        setMonth({ value, isError: false, isDone: false });
      }
    } else if (name === "year") {
      if (value.length === 2) {
        setYear({
          value,
          isError: !isValidDate({ year: value, month: month.value }),
          isDone: isValidDate({ year: value, month: month.value }),
        });
        setErrorMessage(
          isValidDate({ year: value, month: month.value })
            ? ""
            : ERRORS.deprecatedCard
        );
      } else {
        setYear({ value, isError: false, isDone: false });
      }
    }
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
