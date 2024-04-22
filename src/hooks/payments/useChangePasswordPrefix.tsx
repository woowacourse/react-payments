import { useState } from 'react';
import { isValidPasswordPrefixInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const useChangePasswordPrefix = () => {
  const [passwordPrefix, setPasswordPrefix] = useState('');
  const [passwordPrefixError, setPasswordPRefixError] = useState({ isError: false, errorMessage: '' });

  const handlePasswordPrefixChange = (value: string) => {
    if (!isValidPasswordPrefixInput(value)) {
      setPasswordPRefixError({ isError: true, errorMessage: ERROR_MESSAGE.invalidPasswordPrefixInput });
      return;
    }

    setPasswordPrefix(value);
    setPasswordPRefixError({ isError: false, errorMessage: '' });
  };

  return { passwordPrefix, passwordPrefixError, handlePasswordPrefixChange };
};

export default useChangePasswordPrefix;
