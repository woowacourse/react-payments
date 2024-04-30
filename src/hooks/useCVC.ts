import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { useState } from 'react';
import MESSAGE from '../constants/Message';

const { REG_EXP } = CONDITION;
const { ERROR } = MESSAGE;
export interface CVCStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  isValid: boolean;
}

const useCVCState = (defaultValues: number | undefined) => {
  const [cvc, setCVC, isCVCError] = useInput(defaultValues, REG_EXP.cvc);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const cvcErrorMessage = isCVCError ? ERROR.cvc : '';
  const isCVCValid = cvc !== undefined && !isCVCError;

  return {
    cvcState: {
      value: cvc,
      setValue: setCVC,
      isError: isCVCError,
      isFocus,
      setIsFocus,
      errorMessage: cvcErrorMessage,
      isValid: isCVCValid,
    },
  };
};

export default useCVCState;
