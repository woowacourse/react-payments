import { useEffect, useState } from 'react';
import { isNumberType, isValidDateType } from '../utils/validators';

export const useFormValidDay = (formRef) => {
  const [validDay, setValidDay] = useState({ month: '', year: '', latelyType: 'month' });
  const [inputValid, setInputValid] = useState({ month: true, year: true });

  const handleValidDayChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setValidDay((validDay) => ({ ...validDay, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = validDay.latelyType;
    const inputValue = validDay[inputType];

    if (inputValue.length !== 2) return;

    if (isValidDateType[inputType](inputValue)) {
      setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));
    }

    const emptyValue = Object.keys(validDay).find((key) => !validDay[key]);

    if (!emptyValue) return;

    formRef.current[emptyValue].focus();
  }, [validDay, formRef]);

  const handleValidDayBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(inputValid).forEach((key) => {
      if (!validDay[key] || !isValidDateType[key](validDay[key])) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
  };

  return {
    validDay: {
      value: validDay,
      handleChange: handleValidDayChange,
      handleBlur: handleValidDayBlur,
      isValid: inputValid,
    },
  };
};
