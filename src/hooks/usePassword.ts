import { useEffect, useState } from 'react';
import { Password } from '../types/card';

const usePassword = (initPassword = '') => {
  const [password, setPassword] = useState<Password>({
    passwordField: {
      password: { value: initPassword, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(password.passwordField).reduce(
        (pre, cur) => {
          if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
            return pre + 1;
          }
          return pre;
        },
        0
      );
      return isNotAllError === 1;
    };
    if (checkCompleteInput()) {
      setPassword((prev: Password) => ({
        ...prev,
        isNextField: true,
      }));
    }
  }, [password.passwordField]);

  const handleUpdatePasswordInput = (value: string) => {
    const cardKey = 'password' as keyof typeof password.passwordField;
    setPassword((prevState: Password) => {
      return {
        ...prevState,
        passwordField: {
          ...prevState.passwordField,
          [cardKey]: {
            ...prevState.passwordField[cardKey],
            value: value,
          },
        },
      };
    });
  };

  const handleUpdatePasswordErrorMessages = (
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'password' as keyof typeof password.passwordField;
    setPassword((prevState: Password) => {
      return {
        ...prevState,
        passwordField: {
          ...prevState.passwordField,
          [cardKey]: {
            ...prevState.passwordField[cardKey],
            errorMessage: errorMessage,
            isError: isError,
          },
        },
      };
    });
  };

  return {
    password,
    handleUpdatePasswordInput,
    handleUpdatePasswordErrorMessages,
  };
};

export default usePassword;
