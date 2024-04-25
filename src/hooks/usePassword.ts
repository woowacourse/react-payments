import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const usePassword = (defaultValue: string) => {
  const passwordCondition = (value: string) => value.length === 2;

  const {
    value: passwordState,
    onChange: setPasswordState,
    isError: isPasswordError,
  } = useInput<string>(defaultValue, REG_EXP.password, passwordCondition);

  return {
    passwordState,
    setPasswordState,
    isPasswordError,
  };
};

export default usePassword;
