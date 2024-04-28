import useInput from './useInput';
import CONDITION from '../constants/Condition';
import MESSAGE from '../constants/Message';

const { REG_EXP, showVisa, showMasterCard } = CONDITION;
const { ERROR } = MESSAGE;
interface ShowImageConditionType {
  isVisa: boolean;
  isMasterCard: boolean;
}

interface DetailCardNumberStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}
export interface CardNumberStateType {
  firstState: DetailCardNumberStateType;
  secondState: DetailCardNumberStateType;
  thirdState: DetailCardNumberStateType;
  fourthState: DetailCardNumberStateType;
  showImageCondition: ShowImageConditionType;
  errorMessage: string;
  isValid: boolean;
}

const useCardNumber = (defaultValues: Array<number | undefined>) => {
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

  const isCardNumberFilled = first && second && third && fourth;
  const isCardNumberError = isFirstError || isSecondError || isThirdError || isFourthError;
  const cardNumberErrorMessage = isCardNumberError ? ERROR.cardNumber : '';
  const isCardNumberValid = isCardNumberFilled && !isCardNumberError;

  return {
    cardNumberState: {
      firstState: {
        value: first,
        setValue: setFirst,
        isError: isFirstError,
      },
      secondState: {
        value: second,
        setValue: setSecond,
        isError: isSecondError,
      },
      thirdState: {
        value: third,
        setValue: setThird,
        isError: isThirdError,
      },
      fourthState: {
        value: fourth,
        setValue: setFourth,
        isError: isFourthError,
      },
      showImageCondition: {
        isVisa: showVisa(first),
        isMasterCard: showMasterCard(first),
      },
      errorMessage: cardNumberErrorMessage,
      isValid: isCardNumberValid,
    },
  };
};

export default useCardNumber;
