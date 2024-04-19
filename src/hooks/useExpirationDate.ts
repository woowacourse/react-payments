import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth, isMonthError] = useInput(defaultValues[0], REG_EXP.month);
  const [year, setYear, isYearError] = useInput(defaultValues[1], REG_EXP.year);

  return {
    expirationDateState: {
      month,
      year,
    },
    setExpirationDateState: {
      setMonth,
      setYear,
    },
    expirationDateErrorState: {
      isMonthError,
      isYearError,
    },
  };
};

export default useExpirationDate;
