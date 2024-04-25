import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useCVCNumber = (defaultValue: string) => {
  const cvcNumberCondition = (value: string) => value.length === 3;

  const {
    value: cvcNumberState,
    onChange: setCVCNumberState,
    isError: isCVCNumberError,
  } = useInput<string>(defaultValue, REG_EXP.cvcNumber, cvcNumberCondition);

  return {
    cvcNumberState,
    setCVCNumberState,
    isCVCNumberError,
  };
};

export default useCVCNumber;
