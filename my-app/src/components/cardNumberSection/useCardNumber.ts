import { useRef, useState } from "react";
import { getCardNumberError, isInputValidate } from "../../utils/Validation";


interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export const useCardNumber = ({value, setValue}: Props) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    
  const handleOnChange = (inputValue: string, index: number) => {
    if (!isInputValidate(inputValue, 4)) return;

    const newValue = [...value];
    newValue[index] = inputValue;
    setValue(newValue);

    if (inputValue.length === 4 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnBlur = (inputValue:string, index: number) => {
    const isError = getCardNumberError(inputValue) !== '';
    setErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = isError;
      return newErrors;
    });
  };

  const errorIndex = errors.findIndex((isError) => isError);
  const finalErrorMessage = errorIndex !== -1 ? getCardNumberError(value[errorIndex]) : '';

  return {
    errors,
    inputRefs,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage,
  };
};