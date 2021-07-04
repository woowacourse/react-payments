import { useState } from 'react';
import { isNumber } from '../utils/validator';

export const usePassword = () => {
  const initialState = {
    first: '',
    second: '',
  };
  const [password, setPassword] = useState(initialState);

  const handlePasswordInput = ({ target: { value, name } }) => {
    isNumber(value) && setPassword((prevPassword) => ({ ...prevPassword, [name]: value.trim() }));
  };

  return {
    password: {
      value: password,
      handleChange: handlePasswordInput,
      reset: () => setPassword(initialState),
    },
  };
};
