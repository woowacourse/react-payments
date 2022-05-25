import { useState, useMemo } from 'react';
import validator from 'validation';
import { numberRegex } from 'constant/regularExpression';

const usePassword = () => {
  const [password, setPassword] = useState(['', '']);

  const isValidPassword = useMemo(() => validator.validatePassword(password.join('')), [password]);

  const handleChangePassword = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }

    const inputIndex = Number(target.name);

    const updatedPassword = password.map((number, index) =>
      index === inputIndex ? target.value : number
    );
    setPassword(updatedPassword);
  };

  return { password, isValidPassword, handleChangePassword };
};

export default usePassword;
