import { useEffect } from 'react';
import useInput from './useInput';
import CONDITION from '../constants/Condition';
import { ShowNextFieldConditionParams } from './useCreateNextField';

const { MAX_LENGTH, REG_EXP, showVisa, showMasterCard } = CONDITION;

const useCardNumbers = (
  defaultValues: string[],
  showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void,
) => {
  const cardLengthCondition = (value: string) => value.length === MAX_LENGTH.cardNumber;

  const {
    value: first,
    onChange: onChangeFirst,
    isError: isFirstError,
    clear: firstClear,
  } = useInput<string>(defaultValues[0] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: second,
    onChange: onChangeSecond,
    isError: isSecondError,
    clear: secondClear,
  } = useInput<string>(defaultValues[1] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: third,
    onChange: onChangeThird,
    isError: isThirdError,
    clear: thirdClear,
  } = useInput<string>(defaultValues[2] ?? '', REG_EXP.cardNumber, cardLengthCondition);
  const {
    value: fourth,
    onChange: onChangeFourth,
    isError: isFourthError,
    clear: fourthClear,
  } = useInput<string>(defaultValues[3] ?? '', REG_EXP.cardNumber, cardLengthCondition);

  const isFieldError = isFirstError || isSecondError || isThirdError || isFourthError;

  const isFill =
    first.length === MAX_LENGTH.cardNumber &&
    second.length === MAX_LENGTH.cardNumber &&
    third.length === MAX_LENGTH.cardNumber &&
    fourth.length === MAX_LENGTH.cardNumber;

  useEffect(() => {
    showNextFieldOnValid({
      isFill,
      isFieldError,
      nextIndex: 1,
    });
  }, [isFill, isFieldError, showNextFieldOnValid]);

  return {
    cardNumberState: {
      first,
      second,
      third,
      fourth,
    },
    setCardNumberState: {
      onChangeFirst,
      onChangeSecond,
      onChangeThird,
      onChangeFourth,
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
