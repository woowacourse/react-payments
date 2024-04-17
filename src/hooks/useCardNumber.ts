import useInput from './useInput';

const CARD_NUMBER_CONDITION = /^\d{4}$/;
export const CARD_NUMBER_ERROR_MESSAGE = '4자리 숫자를 입력해주세요.';

const useCardNumber = (defaultValues: Array<number | undefined>) => {
  const [first, setFirst, firstError] = useInput<number | undefined>(
    defaultValues[0],
    CARD_NUMBER_CONDITION,
  );
  const [second, setSecond, secondError] = useInput<number | undefined>(
    defaultValues[1],
    CARD_NUMBER_CONDITION,
  );
  const [third, setThird, thirdError] = useInput<number | undefined>(
    defaultValues[2],
    CARD_NUMBER_CONDITION,
  );
  const [fourth, setFourth, fourthError] = useInput<number | undefined>(
    defaultValues[3],
    CARD_NUMBER_CONDITION,
  );

  const visaShowCondition = String(first)[0] === '4';
  const masterCardShowCondition =
    String(first)[0] === '5' && ['1', '2', '3', '4', '5'].includes(String(first)[1]);

  return {
    firstState: {
      first,
      setFirst,
      firstError,
    },
    secondState: {
      second,
      setSecond,
      secondError,
    },
    thirdState: {
      third,
      setThird,
      thirdError,
    },
    fourthState: {
      fourth,
      setFourth,
      fourthError,
    },
    showImageCondition: {
      visaShowCondition,
      masterCardShowCondition,
    },
  };
};

export default useCardNumber;
