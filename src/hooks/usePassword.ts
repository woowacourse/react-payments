import { useState } from 'react';
import useValidation from './useValidation';
import validatePassword from '../validators/validatePassword';

const usePassword = () => {
  const [password, setPassword] = useState('');
  const { errorStatus, updateErrorStatus } = useValidation(password, validatePassword);

  return {
    data: password,
    setData: setPassword,
    errorStatus,
    updateErrorStatus,
  };
};

export default usePassword;
