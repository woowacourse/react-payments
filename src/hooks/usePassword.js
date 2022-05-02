import { useState, useMemo } from 'react';
import validator from '../validation';
import { numberRegex } from '../constant/regularExpression';

const usePassword = () => {
  const [password, setPassword] = useState(['', '']);

  const isValidPassword = useMemo(() => validator.validatePassword(password.join('')), [password]);

  const handleChangePassword = ({ nativeEvent: { data, inputType }, target }, childIndex) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }

    const updatedPassword = password.map((number, index) =>
      index === childIndex ? target.value : number
    );
    setPassword(updatedPassword);
  };

  return { password, isValidPassword, handleChangePassword };
};

export default usePassword;
