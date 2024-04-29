import useInput from './useInput';
import CONDITION from '../constants/Condition';
import MESSAGE from '../constants/Message';
import { useState } from 'react';

const { REG_EXP } = CONDITION;
const { ERROR } = MESSAGE;
export interface UserNameStateType {
  value: string | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  isValid: boolean;
}

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, isUserNameError] = useInput(defaultValue, REG_EXP.userName);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const userNameErrorMessage = isUserNameError ? ERROR.userName : '';
  const isUserNameValid = !isFocus && userName !== '' && !isUserNameError;

  return {
    userNameState: {
      value: userName,
      setValue: setUserName,
      isError: isUserNameError,
      setIsFocus,
      errorMessage: userNameErrorMessage,
      isValid: isUserNameValid,
    },
  };
};

export default useUserName;
