import { useEffect, useState } from 'react';
import { isNumberType } from '../utils/validators';

export const useFormNumber = (formRef) => {
  const [numbers, setNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    latelyType: 'first',
  });
  const [inputValid, setInputValid] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
  });

  const handleNumbersChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setNumbers((numbers) => ({ ...numbers, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = numbers.latelyType;
    const inputValue = numbers[inputType];

    if (inputValue.length !== 4) return;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    const emptyValue = Object.keys(numbers).find((key) => !numbers[key]);

    if (!emptyValue) {
      return;
    }

    formRef.current[emptyValue].focus();
  }, [numbers, formRef]);

  const handleNumbersBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(inputValid).forEach((key) => {
      if (!numbers[key] || numbers[key].length !== 4) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
  };

  return {
    numbers: {
      value: numbers,
      handleChange: handleNumbersChange,
      handleBlur: handleNumbersBlur,
      isValid: inputValid,
    },
  };
};
