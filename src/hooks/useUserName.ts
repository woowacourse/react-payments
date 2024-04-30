import { useState } from 'react';
import { UserName } from '../types/card';

const useUserName = (initUserName = '') => {
  const [userName, setUserName] = useState<UserName>({
    userNameField: {
      userName: { value: initUserName, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  const handleUpdateUserNameIsNextPage = () => {
    setUserName((prevState: UserName) => ({
      ...prevState,
      isNextField: true,
    }));
  };

  const handleUpdateUserNameInput = (value: string) => {
    const cardKey = 'userName' as keyof typeof userName.userNameField;
    setUserName((prevState: UserName) => {
      return {
        ...prevState,
        userNameField: {
          ...prevState.userNameField,
          [cardKey]: {
            ...prevState.userNameField[cardKey],
            value: value,
          },
        },
      };
    });
  };

  const handleUpdateUserNameErrorMessages = (
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'userName' as keyof typeof userName.userNameField;
    setUserName((prevState: UserName) => {
      return {
        ...prevState,
        userNameField: {
          ...prevState.userNameField,
          [cardKey]: {
            ...prevState.userNameField[cardKey],
            errorMessage: errorMessage,
            isError: isError,
          },
        },
      };
    });
  };

  return {
    userName,
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
  };
};

export default useUserName;
