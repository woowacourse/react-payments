import { useState } from "react";
import { SetValueFn, UniqueNumberType, UseHookReturn } from "../../types/CardInformationType";
import { UNIQUE_NUMBER_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import useErrorCheckComplete from "../common/useErrorCheckComplete";

const useUniqueNumber = (): UseHookReturn<"uniqueNumber"> => {
  /** 상태 및 변수 관리 */
  const [uniqueNumber, setUniqueNumberState] = useState<UniqueNumberType>(["", "", "", ""]);
  const [isError, setIsError] = useState<errorStateType>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  /** setter(상태업데이트) */
  const setUniqueNumber: SetValueFn<UniqueNumberType[number]> = (value, index) => {
    if (index === undefined) return;

    /** 에러 및 에러메세지 매칭 */
    // validateInput(value, index);

    // setter 상태업데이트
    setUniqueNumberState((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated as UniqueNumberType;
    });
  };

  const validateInput = (value: string, index: number) => {
    const { error, message } = validateNumberOnly(value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  /** 일반 return 변수 관리 (길이 complete, error complete) */

  const isComplete = useCheckLengthComplete(uniqueNumber, UNIQUE_NUMBER_MAX_LENGTH);
  const isErrorComplete = useErrorCheckComplete(isError);

  return {
    state: uniqueNumber,
    setState: setUniqueNumber,
    validateInput,
    isError,
    errorMessage,
    isComplete,
    isErrorComplete,
  };
};

export default useUniqueNumber;
