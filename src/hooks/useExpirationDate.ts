import useInput from './useInput';
import CONDITION from '../constants/Condition';
import MESSAGE from '../constants/Message';

const { REG_EXP } = CONDITION;
const { ERROR } = MESSAGE;

interface DetailExpirationDateStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}
export interface ExpirationDateStateType {
  monthState: DetailExpirationDateStateType;
  yearState: DetailExpirationDateStateType;
  errorMessage: string;
  isValid: boolean;
}

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth, isMonthError] = useInput(defaultValues[0], REG_EXP.month);
  const [year, setYear, isYearError] = useInput(defaultValues[1], REG_EXP.year);

  const isExpirationDateFilled = month && year;
  const isExpirationDateError = isMonthError || isYearError;
  const expirationErrorMessage = isMonthError ? ERROR.month : isYearError ? ERROR.year : '';
  const isExpirationDateValid = isExpirationDateFilled && !isExpirationDateError;

  return {
    expirationDateState: {
      monthState: {
        value: month,
        setValue: setMonth,
        isError: isMonthError,
      },
      yearState: {
        value: year,
        setValue: setYear,
        isError: isYearError,
      },
      errorMessage: expirationErrorMessage,
      isValid: isExpirationDateValid,
    },
  };
};

export default useExpirationDate;
