import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { useReducer } from 'react';

const { REG_EXP } = CONDITION;

const useCVCNumber = (defaultValue: string) => {
  const cvcNumberCondition = (value: string) => value.length === 3;
  const [isFocusCVCPreview, toggleIsFocusCVCPreview] = useReducer((prev) => !prev, false);

  const {
    value: cvcNumberState,
    onChange: setCVCNumberState,
    isError: isCVCNumberError,
  } = useInput<string>(defaultValue, REG_EXP.cvcNumber, cvcNumberCondition);

  return {
    cvcNumberState,
    setCVCNumberState,
    isCVCNumberError,
    isFocusCVCPreview,
    toggleIsFocusCVCPreview,
  };
};

export default useCVCNumber;
