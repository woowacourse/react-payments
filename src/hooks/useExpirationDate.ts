import useInput from './useInput';

const MONTH_CONDITION = /^(0[1-9]|1[0-2])$/;
const YEAR_CONDITION = /^\d{2}$/;
export const MONTH_ERROR_MESSAGE = '01~12 사이의 숫자를 입력해주세요.';
export const YEAR_ERROR_MESSAGE = '2자리 숫자를 입력해주세요.';

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth, monthError] = useInput(defaultValues[0], MONTH_CONDITION);
  const [year, setYear, yearError] = useInput(defaultValues[1], YEAR_CONDITION);

  return {
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
  };
};

export default useExpirationDate;
