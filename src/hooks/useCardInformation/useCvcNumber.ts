import { useState } from "react";
import { CvcNumberType, SetValueFn, UseHookReturn } from "../../types/CardInformationType";
import { CVC_NUMBER_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import useErrorCheckComplete from "../common/useErrorCheckComplete";

const useCvcNumber = (): UseHookReturn<"cvcNumber"> => {
  const [cvcNumber, setCvcNumberState] = useState<CvcNumberType>("");
  const [isError, setIsError] = useState<errorStateType>([false]);
  const [errorMessage, setErrorMessage] = useState("");

  const setCvcNumber: SetValueFn<CvcNumberType> = (value) => setCvcNumberState(value);

  const validateInput = (value: string, index: number) => {
    const { error, message } = validateNumberOnly(value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isComplete = useCheckLengthComplete(cvcNumber, CVC_NUMBER_MAX_LENGTH);
  const isErrorComplete = useErrorCheckComplete(isError);

  return {
    state: cvcNumber,
    setState: setCvcNumber,
    validateInput,
    isError,
    errorMessage,
    isComplete,
    isErrorComplete,
  };
};

export default useCvcNumber;
