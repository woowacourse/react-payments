import { getPasswordError } from '../../utils/Validation';
import { useInputShell } from '../common/commonHook/useInputShell';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const usePassword = ({ value, setValue }: Props) => {
  const inputShell = useInputShell({ 
    value,
    setValue,
    maxLengthList: [2],
    valueUpdater: (_, newValue) => newValue,
    errorChecker: (val) => [getPasswordError(val) !== ''],
    errorMessageGenerator: (val) => getPasswordError(val),
  });

  return {
    error: inputShell.errors[0],
    handleOnChange: (val: string) => inputShell.handleOnChange(val, 0),
    handleOnBlur: (val: string) => inputShell.handleOnBlur(val, 0),
    finalErrorMessage: inputShell.finalErrorMessage,
  };
};
