import { useEffect, useState } from 'react';
import { isNumberType } from '../utils/validators';

export const useFormPassword = (formRef) => {
  const [password, setPassword] = useState({
    firstDigit: '',
    secondDigit: '',
    latelyType: 'firstDigit',
  });
  const [inputValid, setInputValid] = useState({
    firstDigit: true,
    secondDigit: true,
  });

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setPassword((password) => ({ ...password, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = password.latelyType;
    const inputValue = password[inputType];

    if (inputValue.length !== 1) return;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    const emptyValue = Object.keys(password).find((key) => !password[key]);

    if (!emptyValue) return;

    formRef.current[emptyValue].focus();
  }, [password, formRef]);

  const handlePasswordBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(inputValid).forEach((key) => {
      if (!password[key]) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
  };

  return {
    password: {
      value: password,
      handleChange: handlePasswordChange,
      handleBlur: handlePasswordBlur,
      isValid: inputValid,
    },
  };
};
