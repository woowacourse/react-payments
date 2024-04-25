import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { useState } from 'react';

const { REG_EXP } = CONDITION;

export interface CVCStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const useCVCState = (defaultValues: number | undefined) => {
  const [cvc, setCVC, cvcError] = useInput(defaultValues, REG_EXP.cvc);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return {
    cvcState: {
      value: cvc,
      setValue: setCVC,
      error: cvcError,
      isFocus,
      setIsFocus,
    },
  };
};

export default useCVCState;
