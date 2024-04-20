import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { MonthState, YearState } from '../types/Types';

const { REG_EXP } = CONDITION;

export interface ExpirationDateState {
  monthState: MonthState;
  yearState: YearState;
}

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth, monthError] = useInput(defaultValues[0], REG_EXP.month);
  const [year, setYear, yearError] = useInput(defaultValues[1], REG_EXP.year);

  return {
    expirationDateState: {
      monthState: {
        month,
        setMonth,
        monthError,
      },
      yearState: {
        year,
        setYear,
        yearError,
      },
    },
  };
};

export default useExpirationDate;
