import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, showVisa, showMasterCard } = CONDITION;

interface ShowImageConditionType {
  isVisa: boolean;
  isMasterCard: boolean;
}

interface DetailCardNumberStateType {
  value: number | undefined;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}
export interface CardNumberStateType {
  firstState: DetailCardNumberStateType;
  secondState: DetailCardNumberStateType;
  thirdState: DetailCardNumberStateType;
  fourthState: DetailCardNumberStateType;
  showImageCondition: ShowImageConditionType;
}

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
        value: first,
        setValue: setFirst,
        error: firstError,
      },
      secondState: {
        value: second,
        setValue: setSecond,
        error: secondError,
      },
      thirdState: {
        value: third,
        setValue: setThird,
        error: thirdError,
      },
      fourthState: {
        value: fourth,
        setValue: setFourth,
        error: fourthError,
      },
      showImageCondition: {
        isVisa: showVisa(first),
        isMasterCard: showMasterCard(first),
      },
    },
  };
};

export default useCardNumber;
