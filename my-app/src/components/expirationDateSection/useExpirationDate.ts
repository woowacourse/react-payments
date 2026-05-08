import { getMonthError, getYearError } from '../../utils/Validation';
import { useInputShell } from '../common/commonHook/useInputShell';

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string }) => void;
}

export const useExpirationDate = ({ value, setValue }: Props) => {
  return useInputShell({
    value,
    setValue,
    maxLengthList: [2, 2],
    valueUpdater: (currentValue, newValue, index) =>
      index === 0
        ? { ...currentValue, month: newValue }
        : { ...currentValue, year: newValue },
    errorChecker: (val) => [
      getMonthError(val.month) !== '',
      getYearError(val.year) !== '',
    ],
    errorMessageGenerator: (val) =>
      getMonthError(val.month) || getYearError(val.year),
  });
};
