import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, showVisa, showMasterCard } = CONDITION;

const useCardNumber = (defaultValues: Array<number | undefined>) => {
  const [first, setFirst, firstError] = useInput<number | undefined>(
    defaultValues[0],
    REG_EXP.cardNumber,
  );
  const [second, setSecond, secondError] = useInput<number | undefined>(
    defaultValues[1],
    REG_EXP.cardNumber,
  );
  const [third, setThird, thirdError] = useInput<number | undefined>(
    defaultValues[2],
    REG_EXP.cardNumber,
  );
  const [fourth, setFourth, fourthError] = useInput<number | undefined>(
    defaultValues[3],
    REG_EXP.cardNumber,
  );

  return {
    cardNumberState: {
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
  },
    showImageCondition: {
      isVisa: showVisa(first),
      isMasterCard: showMasterCard(first),
    },
  };
};

export default useCardNumber;
