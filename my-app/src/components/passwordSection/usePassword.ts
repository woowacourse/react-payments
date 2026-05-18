import { getPasswordError } from '../../utils/Validation';
import { useErrorTouched } from '../common/commonHooks/useErrorTouched';
import { useNumberInputCheck } from '../common/commonHooks/useNumberInputCheck';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const usePassword = ({ value, setValue }: Props) => {
  const { handleOnChange } = useNumberInputCheck({
    value,
    setValue,
    maxLengthList: [2],
    valueUpdater: (_, newValue) => newValue,
  });

  const { errors, finalErrorMessage, markingTouched } = useErrorTouched({
    value,
    length: 1,
    errorChecker: (val) => [getPasswordError(val) !== ''],
    errorMessageGenerator: (val) => getPasswordError(val),
  });

  return {
    handleOnChange: (val: string) => handleOnChange(val, 0),
    handleOnBlur: () => markingTouched(0),
    error: errors[0],
    finalErrorMessage,
  };
};
