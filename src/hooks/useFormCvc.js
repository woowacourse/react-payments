import { useEffect, useState } from 'react';
import { isNumberType } from '../utils/validators';

export const useFormCvc = () => {
  const [cvc, setCvc] = useState('');
  const [inputValid, setInputValid] = useState(true);

  const handleCvcChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setCvc(filteredValue);
  };

  useEffect(() => {
    if (cvc.length !== 3) return;

    setInputValid(() => true);
  }, [cvc]);

  const handleCvcBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    if (!cvc || cvc.length !== 3) {
      setInputValid(() => false);
      return;
    }

    setInputValid(() => true);
  };

  return {
    cvc: {
      value: cvc,
      handleChange: handleCvcChange,
      handleBlur: handleCvcBlur,
      isValid: inputValid,
    },
  };
};
