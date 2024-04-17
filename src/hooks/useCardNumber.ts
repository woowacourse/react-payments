import useInput from './useInput';

const useCardNumber = (defaultValues: Array<number | undefined>) => {
  const [first, setFirst] = useInput<number | undefined>(defaultValues[0]);
  const [second, setSecond] = useInput<number | undefined>(defaultValues[1]);
  const [third, setThird] = useInput<number | undefined>(defaultValues[2]);
  const [fourth, setFourth] = useInput<number | undefined>(defaultValues[3]);

  return {
    firstState: {
      first,
      setFirst,
    },
    secondState: {
      second,
      setSecond,
    },
    thirdState: {
      third,
      setThird,
    },
    fourthState: {
      fourth,
      setFourth,
    },
  };
};

export default useCardNumber;
