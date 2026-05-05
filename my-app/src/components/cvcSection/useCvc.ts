import { useRef, useState } from "react";
import { getCvcError, isInputValidate } from "../../utils/Validation";


interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const useCvc = ({value, setValue}: Props) => {
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const handleOnChange = (inputValue: string) => {
    if(!isInputValidate(inputValue, 3)) return;

    setValue(inputValue);
  }

  const handleOnBlur = (inputValue: string) => {
    setError(getCvcError(inputValue) !== '');
  }

  const finalErrorMessage = error ? getCvcError(value) : '';

  return {
    error,
    inputRef,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage,
  }
}