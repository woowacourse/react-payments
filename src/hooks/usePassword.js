import { useState } from 'react';
import { isNumber } from '../utils/validator';

export const usePassword = () => {
  const [password, setPassword] = useState({
    first: '',
    second: '',
  });

  const handlePasswordInput = ({ target: { value, name } }) => {
    isNumber(value) && setPassword((prevPassword) => ({ ...prevPassword, [name]: value.trim() }));
  };

  return {
    password: {
      value: password,
      handleChange: handlePasswordInput,
    },
  };
};
