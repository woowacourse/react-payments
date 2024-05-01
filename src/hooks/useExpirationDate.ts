import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { ShowNextFieldConditionParams } from './useCreateNextField';
import { useEffect } from 'react';

const { REG_EXP, MAX_LENGTH } = CONDITION;

const useExpirationDate = (
  defaultValues: string[],
  showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void,
) => {
  const monthCondition = (value: string) =>
    Number(value) >= 1 && Number(value) <= 12 && value.length >= MAX_LENGTH.expirationDate;
  const yearCondition = (value: string) => value.length === MAX_LENGTH.expirationDate;

  const {
    value: month,
    onChange: onChangeMonth,
    isError: isMonthError,
    clear: monthClear,
  } = useInput<string>(defaultValues[0] ?? '', REG_EXP.month, monthCondition);
  const {
    value: year,
    onChange: onChangeYear,
    isError: isYearError,
    clear: yearClear,
  } = useInput<string>(defaultValues[1] ?? '', REG_EXP.year, yearCondition);

  const isFieldError = isMonthError || isYearError;
  const isFill =
    month.length === MAX_LENGTH.expirationDate && year.length === MAX_LENGTH.expirationDate;

  useEffect(() => {
    showNextFieldOnValid({
      isFill,
      isFieldError,
      nextIndex: 3,
    });
  }, [isFieldError, isFill, showNextFieldOnValid]);

  return {
    expirationDateState: {
      month,
      year,
    },
    setExpirationDateState: {
      onChangeMonth,
      onChangeYear,
    },
    expirationDateErrorState: {
      isMonthError,
      isYearError,
      isFieldError,
    },
    resetExpirationDate: () => {
      monthClear();
      yearClear();
    },
  };
};

export default useExpirationDate;
