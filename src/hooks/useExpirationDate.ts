import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useExpirationDate = (defaultValues: number[]) => {
  const monthCondition = (value: string) => Number(value) >= 1 && Number(value) <= 12;
  const yearCondition = (value: string) => value.length === 2;

  const [month, setMonth, isMonthError] = useInput<number>(
    defaultValues[0],
    REG_EXP.month,
    monthCondition,
  );
  const [year, setYear, isYearError] = useInput<number>(
    defaultValues[1],
    REG_EXP.year,
    yearCondition,
  );

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
