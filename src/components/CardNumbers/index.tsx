import CardNumbersView from './CardNumbersView';
import { useErrorMessage } from '../../hooks/useErrorMessage';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface CardNumbersProps {
  cardNumbers: CardNumber;
  setCardNumbers: React.Dispatch<React.SetStateAction<CardNumber>>;
}

const CARD_NUMBERS_LENGTH = 4;
const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CardNumbers = ({ cardNumbers, setCardNumbers }: CardNumbersProps) => {
  const {
      errors,
      setErrors,
      errorMessage,
      setErrorMessage,
    } = useErrorMessage([false, false]);
  const keyMap: CardNumberKey[] = ['first', 'second', 'third', 'fourth'];

  const updateErrors = (
    prev: boolean[],
    index: number,
    isError: boolean
  ): boolean[] => {
    const newErrors = [...prev];
    newErrors[index] = isError;
    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    setCardNumbers((prev) => {
      const newState = { ...prev };
      if (/^[0-9]*$/.test(value) && value.length <= CARD_NUMBERS_LENGTH) {
        const key: CardNumberKey = keyMap[index];
        newState[key] = value;
        setErrors((prevErrors) => updateErrors(prevErrors, index, false));
      } else {
        setErrorMessage(ERROR_MESSAGE);
        setErrors((prevErrors) => updateErrors(prevErrors, index, true));
      }
      return newState;
    });
  };

  return (
    <CardNumbersView
      cardNumbers={cardNumbers}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardNumbers;
