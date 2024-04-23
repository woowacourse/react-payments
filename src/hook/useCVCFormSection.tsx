import { useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UseCVCFormSectionProps {
  changeCVC: (cvc: string, isComplete?: boolean) => void;
  cvc: string
}

const useCVCFormSection = ({ changeCVC, cvc }: UseCVCFormSectionProps) => {
  const [inputState, setInputState] = useState({ hasFocus: false, errorMessage: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      setInputState({ ...inputState, errorMessage: ERROR_MESSAGE.onlyNumber })
      changeCVC(inputValue.slice(0, -1))
    }
    else {
      setInputState({ ...inputState, errorMessage: '' })
      changeCVC(inputValue)
    }
  }

  const handleOnFocus = () => {
    setInputState({ ...inputState, hasFocus: true });

    setInputState({ ...inputState, errorMessage: '' })
  };

  const handleOnBlur = () => {
    setInputState({ ...inputState, hasFocus: false })

    if (!inputState.hasFocus) {
      setInputState({ ...inputState, errorMessage: '' })
    }

    if (cvc.length === OPTION.cvcMaxLength) {
      changeCVC(cvc, true)
    }
  };


  return [inputState, onChange, inputState.errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useCVCFormSection;