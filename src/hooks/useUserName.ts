import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, userNameError] = useInput(defaultValue, REG_EXP.userName);

  return { userNameState: { userName, setUserName, userNameError } };
};

export default useUserName;
