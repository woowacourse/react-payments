import { useState } from "react";
import { CVC_MAX_LENGTH, type InputStatus } from "./constants";
import { checkIsOnlyDigits, checkLengthMatches } from "@/utils/validator";

interface UseCardCVCInputParams {
  onChange: (CVC: string) => void;
  onNextStep: (fromStep: number) => void;
}

const useCardCVCInput = ({ onChange, onNextStep }: UseCardCVCInputParams) => {
  const [status, setStatus] = useState<InputStatus>("DEFAULT");

  const handleCVCChange = (input: string) => {
    if (!checkIsOnlyDigits(input)) {
      setStatus("NOT_NUMBER");
      return;
    }

    setStatus("DEFAULT");
    onChange(input.slice(0, CVC_MAX_LENGTH));

    if (checkLengthMatches(input, CVC_MAX_LENGTH)) {
      onNextStep(4);
    }
  };

  const handleCVCBlur = (input: string) => {
    if (input.length === 0) {
      setStatus("EMPTY");
      return;
    }

    if (!checkLengthMatches(input, CVC_MAX_LENGTH)) {
      setStatus("INVALID_LENGTH");
      return;
    }

    setStatus("DEFAULT");
  };

  return { status, handleCVCChange, handleCVCBlur };
};

export default useCardCVCInput;
