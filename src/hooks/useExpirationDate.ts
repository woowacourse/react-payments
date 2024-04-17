import useInput from './useInput';

const useExpirationDate = (defaultValues: Array<number | undefined>) => {
  const [month, setMonth] = useInput(defaultValues[0]);
  const [year, setYear] = useInput(defaultValues[1]);

  return {
    monthState: {
      month,
      setMonth,
    },
    yearState: {
      year,
      setYear,
    },
  };
};

export default useExpirationDate;
