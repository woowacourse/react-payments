import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

export interface PasswordStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const usePasswordState = (defaultValues: number | undefined) => {
  const [password, setPassword, passwordError] = useInput(defaultValues, REG_EXP.password);

  return {
    passwordState: {
      value: password,
      setValue: setPassword,
      error: passwordError,
    },
  };
};

export default usePasswordState;
