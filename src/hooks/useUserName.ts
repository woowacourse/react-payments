import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, isUserNameError] = useInput(defaultValue, REG_EXP.userName);

  return {
    userNameState: userName,
    setUserNameState: setUserName,
    isUserNameError,
  };
};

export default useUserName;
