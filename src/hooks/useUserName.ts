import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useUserName = (defaultValue: string) => {
  const userNameCondition = (value: string) => value.split(' ').length === 2;

  const changeUpperCase = (value: string) => value.toUpperCase();

  const [userName, setUserName, isUserNameError] = useInput<string>(
    defaultValue,
    REG_EXP.userName,
    userNameCondition,
    changeUpperCase,
  );

  return {
    userNameState: userName,
    setUserNameState: setUserName,
    isUserNameError,
  };
};

export default useUserName;
