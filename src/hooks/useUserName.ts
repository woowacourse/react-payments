import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

export interface UserNameStateType {
  value: string | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, userNameError] = useInput(defaultValue, REG_EXP.userName);

  return { userNameState: { value: userName, setValue: setUserName, error: userNameError } };
};

export default useUserName;
