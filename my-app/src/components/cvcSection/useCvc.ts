import { getCvcError } from "../../utils/Validation";
import { useInputShell } from "../common/commonHook/useInputShell";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const useCvc = ({value, setValue}: Props) => {
  const inputShell = useInputShell({
    value,
    setValue,
    maxLengthList: [3],
    valueUpdater: (_, newValue) => newValue,
    errorChecker: (val) => [getCvcError(val) !== ''],
    errorMessageGenerator: (val) => getCvcError(val),
  });

  return {
    error: inputShell.errors[0],
    inputRef: (el: HTMLInputElement | null) => { inputShell.inputRefs.current[0] = el; },
    handleOnChange: (val: string) => inputShell.handleOnChange(val, 0),
    handleOnBlur: (val: string) => inputShell.handleOnBlur(val, 0),
    finalErrorMessage: inputShell.finalErrorMessage,
  };
};
