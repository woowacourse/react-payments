import { useState } from "react";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import { useEachValidationType } from "../../types/useValidationType";
import useCheckComplete from "./useCheckComplete";

const useUniqueNumberValidation = (): useEachValidationType => {
  const [isError, setIsError] = useState<errorStateType>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (index: number, value: string) => {
    const { error, message } = validateNumberOnly(value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  // 스텝과 버튼을 띄우기 위한 값 생성 (isError의 값이 모두 false 여야한다.)

  const isComplete = useCheckComplete(isError);

  return { isError, isComplete, errorMessage, validateInput };
};

export default useUniqueNumberValidation;
