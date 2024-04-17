import useCardNumber from './useCardNumber';
import useExpirationDate from './useExpirationDate';
import useUserName from './useUserName';

interface FormState {
  cardNumber: Array<number | undefined>;
  expirationDate: Array<number | undefined>;
  userName?: string;
}

const useForm = (defaultValues: FormState) => {
  const { firstState, secondState, thirdState, fourthState, showImageCondition } = useCardNumber(
    defaultValues.cardNumber,
  );
  const { monthState, yearState } = useExpirationDate(defaultValues.expirationDate);
  const { userNameState } = useUserName(defaultValues.userName);

  return {
    cardNumberState: {
      first: firstState.first,
      second: secondState.second,
      third: thirdState.third,
      fourth: fourthState.fourth,
    },
    setCardNumberState: {
      setFirst: firstState.setFirst,
      setSecond: secondState.setSecond,
      setThird: thirdState.setThird,
      setFourth: fourthState.setFourth,
    },
    cardNumberErrorState: {
      firstError: firstState.firstError,
      secondError: secondState.secondError,
      thirdError: thirdState.thirdError,
      fourthError: fourthState.fourthError,
    },
    expirationDateState: {
      month: monthState.month,
      year: yearState.year,
    },
    setExpirationDateState: {
      setMonth: monthState.setMonth,
      setYear: yearState.setYear,
    },
    expirationDateErrorState: {
      monthError: monthState.monthError,
      yearError: yearState.yearError,
    },
    ...userNameState,
    showImageCondition,
  };
};

export default useForm;
