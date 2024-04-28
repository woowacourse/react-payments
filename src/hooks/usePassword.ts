import useInput from './useInput';
import CONDITION from '../constants/Condition';
import MESSAGE from '../constants/Message';

const { REG_EXP } = CONDITION;
const { ERROR } = MESSAGE;
export interface PasswordStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
  isValid: boolean;
}

const usePasswordState = (defaultValues: number | undefined) => {
  const [password, setPassword, isPasswordError] = useInput(defaultValues, REG_EXP.password);

  const passwordErrorMessage = isPasswordError ? ERROR.password : '';
  const isPasswordValid = password !== undefined && !isPasswordError;

  return {
    passwordState: {
      value: password,
      setValue: setPassword,
      isError: isPasswordError,
      errorMessage: passwordErrorMessage,
      isValid: isPasswordValid,
    },
  };
};

export default usePasswordState;
