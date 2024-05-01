import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { useState, useEffect } from 'react';
import { ShowNextFieldConditionParams } from './useCreateNextField';

const { REG_EXP, MAX_LENGTH } = CONDITION;

const useCVCNumber = (
  defaultValue: string,
  showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void,
) => {
  const cvcNumberCondition = (value: string) => value.length === MAX_LENGTH.cvcNumber;
  const [isFocusCVCPreview, setIsFocusCVCPreview] = useState<boolean>(false);

  const {
    value: cvcNumberState,
    onChange,
    isError: isCVCNumberError,
    clear: resetCVCNumber,
  } = useInput<string>(defaultValue, REG_EXP.cvcNumber, cvcNumberCondition);

  const isFill = cvcNumberState.length === MAX_LENGTH.cvcNumber;

  useEffect(() => {
    showNextFieldOnValid({
      isFill,
      isFieldError: isCVCNumberError,
      nextIndex: 5,
    });
  }, [isFill, isCVCNumberError, showNextFieldOnValid]);

  return {
    cvcNumberState,
    onChangeCVC: onChange,
    isCVCNumberError,
    isFocusCVCPreview,
    setIsFocusCVCPreview,
    resetCVCNumber,
  };
};

export default useCVCNumber;
