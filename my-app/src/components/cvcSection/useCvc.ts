import { getCvcError } from '../../utils/Validation';
import { useErrorTouched } from '../common/commonHooks/useErrorTouched';
import { useNumberInputCheck } from '../common/commonHooks/useNumberInputCheck';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const useCvc = ({ value, setValue }: Props) => {
  const { handleOnChange } = useNumberInputCheck({
    value,
    setValue,
    maxLengthList: [3],
    valueUpdater: (_, newValue) => newValue,
  });

  const { errors, finalErrorMessage, markingTouched } = useErrorTouched({
    value,
    length: 1,
    errorChecker: (val) => [getCvcError(val) !== ''],
    errorMessageGenerator: (val) => getCvcError(val),
  });

  return {
    error: errors[0],
    handleOnChange: (val: string) => handleOnChange(val, 0),
    handleOnBlur: () => markingTouched(0),
    finalErrorMessage,
  };
};
