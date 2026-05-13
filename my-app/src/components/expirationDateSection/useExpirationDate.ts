import { getMonthError, getYearError } from '../../utils/Validation';
import { useErrorTouched } from '../common/commonHooks/useErrorTouched';
import { useFocusRule } from '../common/commonHooks/useFocusRule';
import { useNumberInputCheck } from '../common/commonHooks/useNumberInputCheck';

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string }) => void;
}

export const useExpirationDate = ({ value, setValue }: Props) => {
  const { inputRefs, focusMove } = useFocusRule(2);

  const { handleOnChange } = useNumberInputCheck({
    value,
    setValue,
    maxLengthList: [2, 2],
    valueUpdater: (currentValue, newValue, index) =>
      index === 0
        ? { ...currentValue, month: newValue }
        : { ...currentValue, year: newValue },
    onComplete: (index) => focusMove(index),
  });

  const { errors, finalErrorMessage, markingTouched } = useErrorTouched({
    value,
    length: 2,
    errorChecker: (val) => [
      getMonthError(val.month) !== '',
      getYearError(val.year) !== '',
    ],
    errorMessageGenerator: (val) =>
      getMonthError(val.month) || getYearError(val.year),
  });

  return {
    inputRefs,
    errors,
    finalErrorMessage,
    handleOnChange,
    handleOnBlur: (_val: string, index: number) => markingTouched(index),
  };
};
