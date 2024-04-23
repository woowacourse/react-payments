import { useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"

interface UsePasswordFormSectionProps {
  changePassword: (password: string) => void;
  password: string
}

const usePasswordFormSection = ({ changePassword, password }: UsePasswordFormSectionProps) => {
  const [inputState, setInputState] = useState({ hasFocus: false, errorMessage: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(password, event.target.value.slice(event.target.value.length - 1, event.target.value.length));
    const inputValue = password + event.target.value.slice(event.target.value.length - 1, event.target.value.length)
    // const inputValue = event.target.value.length !== 0 ? password + event.target.value.slice(-1, 0) : event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      setInputState({ ...inputState, errorMessage: ERROR_MESSAGE.onlyNumber })
      changePassword(inputValue.slice(0, -1))
    }
    else {
      setInputState({ ...inputState, errorMessage: '' })
      changePassword(inputValue)
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
  };


  return [inputState, onChange, inputState.errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default usePasswordFormSection;