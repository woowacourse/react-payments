import { useState } from 'react';
import { isValidPasswordPrefixInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialState = { isSuccess: false, isError: false, errorMessage: '' };

const useChangePasswordPrefix = () => {
  const [passwordPrefix, setPasswordPrefix] = useState('');
  const [passwordPrefixState, setPasswordPRefixState] = useState(initialState);

  const handlePasswordPrefixChange = (value: string) => {
    if (!isValidPasswordPrefixInput(value)) {
      setPasswordPRefixState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: ERROR_MESSAGE.invalidPasswordPrefixInput,
      }));
      return;
    }

    if (value.length === 2) {
      setPasswordPRefixState({ ...initialState, isSuccess: true });
    }
    // else {
    //   setPasswordPRefixState(initialState);
    // }

    setPasswordPrefix(value);
  };

  return { passwordPrefix, passwordPrefixState, handlePasswordPrefixChange };
};

export default useChangePasswordPrefix;
