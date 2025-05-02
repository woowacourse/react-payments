import { useState } from "react";
import { ExpirationDateType, SetValueFn, UseHookReturn } from "../../types/CardInformationType";
import { EXPIRATION_DATE_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { errorStateType, ExpirationValidationType } from "../../types";
import { validateExpirationDate } from "../../utils/validation";
import useErrorCheckComplete from "../common/useErrorCheckComplete";

const useExpirationDate = (): UseHookReturn<"expirationDate"> => {
  const [expirationDate, setExpirationDateState] = useState<ExpirationDateType>(["", ""]);
  const [isError, setIsError] = useState<errorStateType>([false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const setExpirationDate: SetValueFn<ExpirationDateType[number]> = (value, index) => {
    if (index === undefined) return;

    setExpirationDateState((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated as ExpirationDateType;
    });
  };

  const validateInput = (value: string, index: number) => {
    const type: ExpirationValidationType = index === 0 ? "MM" : "YY";
    const { error, message } = validateExpirationDate(type, value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isComplete = useCheckLengthComplete(expirationDate, EXPIRATION_DATE_MAX_LENGTH);
  const isErrorComplete = useErrorCheckComplete(isError);

  return {
    state: expirationDate,
    setState: setExpirationDate,
    validateInput,
    isError,
    errorMessage,
    isComplete,
    isErrorComplete,
  };
};

export default useExpirationDate;
