import useInput from './useInput';
import CONDITION from '../constants/Condition';
import MESSAGE from '../constants/Message';

const { REG_EXP } = CONDITION;
const { ERROR } = MESSAGE;
export interface UserNameStateType {
  value: string | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
  isValid: boolean;
}

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, isUserNameError] = useInput(defaultValue, REG_EXP.userName);

  const userNameErrorMessage = isUserNameError ? ERROR.userName : '';
  const isUserNameValid = userName && !isUserNameError;

  return {
    userNameState: {
      value: userName,
      setValue: setUserName,
      isError: isUserNameError,
      errorMessage: userNameErrorMessage,
      isValid: isUserNameValid,
    },
  };
};

export default useUserName;
