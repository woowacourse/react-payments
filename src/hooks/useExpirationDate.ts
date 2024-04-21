import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

interface DetailExpirationDateStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}
export interface ExpirationDateStateType {
  monthState: DetailExpirationDateStateType;
  yearState: DetailExpirationDateStateType;
}

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth, monthError] = useInput(defaultValues[0], REG_EXP.month);
  const [year, setYear, yearError] = useInput(defaultValues[1], REG_EXP.year);

  return {
    expirationDateState: {
      monthState: {
        value: month,
        setValue: setMonth,
        error: monthError,
      },
      yearState: {
        value: year,
        setValue: setYear,
        error: yearError,
      },
    },
  };
};

export default useExpirationDate;
