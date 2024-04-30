import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, MAX_LENGTH } = CONDITION;

const usePassword = (defaultValue: string) => {
  const passwordCondition = (value: string) => value.length === MAX_LENGTH.password;

  const {
    value: passwordState,
    onChange: onChangePassword,
    isError: isPasswordError,
    clear: resetPassword,
  } = useInput<string>(defaultValue, REG_EXP.password, passwordCondition);

  const isFieldError = isPasswordError;

  return {
    passwordState,
    onChangePassword,
    isPasswordError,
    isFieldError,
    resetPassword,
  };
};

export default usePassword;
