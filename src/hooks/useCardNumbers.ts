import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, showVisa, showMasterCard } = CONDITION;

const useCardNumbers = (defaultValues: Array<number | undefined>) => {
  const [first, setFirst, isFirstError] = useInput<number | undefined>(
    defaultValues[0],
    REG_EXP.cardNumber,
  );
  const [second, setSecond, isSecondError] = useInput<number | undefined>(
    defaultValues[1],
    REG_EXP.cardNumber,
  );
  const [third, setThird, isThirdError] = useInput<number | undefined>(
    defaultValues[2],
    REG_EXP.cardNumber,
  );
  const [fourth, setFourth, isFourthError] = useInput<number | undefined>(
    defaultValues[3],
    REG_EXP.cardNumber,
  );

  return {
    cardNumberState: {
      first,
      second,
      third,
      fourth,
    },
    setCardNumberState: {
      setFirst,
      setSecond,
      setThird,
      setFourth,
    },
    cardNumberErrorState: {
      isFirstError,
      isSecondError,
      isThirdError,
      isFourthError,
    },
    showImageCondition: {
      visaShowCondition: showVisa(first),
      masterCardShowCondition: showMasterCard(first),
    },
  };
};

export default useCardNumbers;
