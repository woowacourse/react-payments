import { useEffect, useState } from 'react';

interface UseMultiFormSectionProps {
  refs: React.MutableRefObject<HTMLInputElement[]>
  values: string[];
  updateValues: (values: string[]) => void;
  updateComplete: () => void;
  validateOnChange: (value: string, index?: number) => string;
  validateOnBlur: (index?: number) => string;
  validateOnBlurAll: () => string[];
}

const useMultiFormSection = ({
  refs,
  values,
  updateValues,
  updateComplete,
  validateOnChange,
  validateOnBlur,
  validateOnBlurAll,
}: UseMultiFormSectionProps) => {
  const [errors, setErrors] = useState(Array.from({ length: values.length }).fill('') as string[])
  const [hasAnyFocus, setHasAnyFocus] = useState(refs.current.some((element) => element === document.activeElement))

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const inputValue = e.target.value;
    const errorMessage = validateOnChange(inputValue, index);
    const newErrors = [...errors]

    if (errorMessage.length) {
      newErrors[index] = errorMessage
    } else {
      newErrors[index] = ''

      const newValue = [...values];
      newValue[index] = inputValue;

      updateValues(newValue);
    }

    setErrors(newErrors)
  };

  const onFocusHandler = () => {
    setHasAnyFocus(refs.current.some((element) => element === document.activeElement))
    setErrors(errors.map(() => ''));
  };

  const onBlurHandler = (index?: number) => {
    setHasAnyFocus(refs.current.some((element) => element === document.activeElement))
    validateOnBlur(index)
  };

  useEffect(() => {
    if (values.join("").length === 0) return

    if (!hasAnyFocus) {
      const newErrors = validateOnBlurAll();
      if (newErrors.every((error) => error === '')) {
        setErrors(errors.map(() => ''))
        updateComplete();

        return;
      }
      setErrors(newErrors);

      return
    }

  }, [hasAnyFocus]);

  return {
    errors,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useMultiFormSection;
