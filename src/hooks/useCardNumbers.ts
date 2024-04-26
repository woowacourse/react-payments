import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, showVisa, showMasterCard } = CONDITION;

const useCardNumbers = (defaultValues: string[]) => {
  const cardLengthCondition = (value: string) => value.length === 4;

  const {
    value: first,
    onChange: setFirst,
    isError: isFirstError,
    clear: firstClear,
  } = useInput<string>(defaultValues[0] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: second,
    onChange: setSecond,
    isError: isSecondError,
    clear: secondClear,
  } = useInput<string>(defaultValues[1] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: third,
    onChange: setThird,
    isError: isThirdError,
    clear: thirdClear,
  } = useInput<string>(defaultValues[2] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: fourth,
    onChange: setFourth,
    isError: isFourthError,
    clear: fourthClear,
  } = useInput<string>(defaultValues[3] ?? '', REG_EXP.cardNumber, cardLengthCondition);

  const isFieldError = isFirstError || isSecondError || isThirdError || isFourthError;

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
      isFieldError,
    },
    showImageCondition: {
      visaShowCondition: showVisa(first),
      masterCardShowCondition: showMasterCard(first),
    },
    resetCardNumbers: () => {
      firstClear();
      secondClear();
      thirdClear();
      fourthClear();
    },
  };
};

export default useCardNumbers;
