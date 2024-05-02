import { useEffect, useState } from 'react';

interface UseMultiFormSectionProps {
  refs: React.MutableRefObject<HTMLInputElement[]>
  values: string[];
  updateValues: (values: string[]) => void;
  validateOnChange: (index: number, value: string) => ValidateResult;
  validateOnBlur: (index: number) => ValidateResult;
  validateOnBlurAll: () => ValidateAllResult;
}

interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

interface ValidateAllResult {
  indexList: number[];
  isValid: boolean;
  errorMessage: string;
}

const useMultiFormSection = ({
  refs,
  values,
  updateValues,
  validateOnChange,
  validateOnBlur,
  validateOnBlurAll,
}: UseMultiFormSectionProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [hasErrors, setHasErrors] = useState(Array.from<boolean>({ length: values.length }).fill(false))

  const hasAnyFocus = refs.current.some((element) => element === document.activeElement);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const targetValue = e.target.value;

    const { isValid, errorMessage } = validateOnChange(index, targetValue);
    if (!isValid) {
      setNewHasErrors(index, true)
      setErrorMessage(errorMessage);
    } else {
      setNewHasErrors(index, false)
      setErrorMessage('');
      const newValue = [...values];
      newValue[index] = targetValue;
      updateValues(newValue);
    }
  };

  const onFocusHandler = (index: number) => {
    setNewHasErrors(index, false)
    setErrorMessage('');
  };

  const onBlurHandler = (index: number) => {
    const { isValid, errorMessage } = validateOnBlur(index);
    if (!isValid) {
      setNewHasErrors(index, true)
      setErrorMessage(errorMessage);
    } else {
      setNewHasErrors(index, false)
    }
  };

  useEffect(() => {
    setHasErrors([false, false, false, false])
    if (values.join("").length === 0) return
    if (!hasAnyFocus) {
      const { indexList, isValid, errorMessage } = validateOnBlurAll();
      setHasErrors(hasErrors.map((_, index) => indexList.includes(index)))
      if (!isValid) {
        setErrorMessage(errorMessage);
      }
    }
  }, [hasAnyFocus]);

  const setNewHasErrors = (index: number, value: boolean) => {
    const newHasErrors = [...hasErrors]
    newHasErrors[index] = value;
    setHasErrors(newHasErrors)
  }

  return {
    hasErrors,
    setHasErrors,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useMultiFormSection;
