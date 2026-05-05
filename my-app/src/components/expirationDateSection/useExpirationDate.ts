import { useRef, useState } from "react";
import { getMonthError, getYearError, isInputValidate } from "../../utils/Validation";

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string; }) => void;
}

export const useExpirationDate = ({value, setValue}: Props) => {
  const [errors, setErrors] = useState({ month: false, year: false });
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (inputValue: string, type: 'month' | 'year') => {
    if (!isInputValidate(inputValue, 2)) return;

    const newValue = { ...value, [type]: inputValue };
    setValue(newValue);

    if (type === 'month' && inputValue.length === 2) {
      yearRef.current?.focus();
    }
  };

  const handleOnBlur = (inputValue: string, type: 'month' | 'year') => {
    const isError = type === 'month' 
      ? getMonthError(inputValue) !== '' 
      : getYearError(inputValue) !== '';

    setErrors(prev => ({ ...prev, [type]: isError }));
  };

  const monthErrMsg = errors.month ? getMonthError(value.month) : '';
  const yearErrMsg = errors.year ? getYearError(value.year) : '';
  const finalErrorMessage = monthErrMsg || yearErrMsg;

  return {
    errors,
    monthRef,
    yearRef,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage,
  }
}
