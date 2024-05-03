import { useState } from 'react';

import { INPUT_REGEX } from '../../constants/regex';

function usePasswordInput(maxLength: number) {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (value: string) => {
    const trimmedValue = value.slice(0, maxLength);

    setPassword(trimmedValue);

    setPasswordError(!INPUT_REGEX.password.test(trimmedValue));
  };

  return {
    password,
    passwordError,
    handlePasswordChange,
  };
}

export default usePasswordInput;
