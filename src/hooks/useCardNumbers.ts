import { ChangeEvent } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardNumbers {
  cardNumbers: string[];
  errorMessageCardNumbers: string[];
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
  focusNextInput: (currentIndex: number) => void;
}

const useCardNumbers = ({
  cardNumbers,
  errorMessageCardNumbers,
  setCardInfo,
  setErrorMessage,
  focusNextInput,
}: IUseCardNumbers) => {
  const handleCardNumbers = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;
    const errorMessageCopy = [...errorMessageCardNumbers];
    errorMessageCopy[index] = validateCardNumber(value);

    setErrorMessage((prev) => {
      return {
        ...prev,
        cardNumbers: [
          errorMessageCopy[0],
          errorMessageCopy[1],
          errorMessageCopy[2],
          errorMessageCopy[3],
        ],
      };
    });

    if (errorMessageCopy[index] === '') {
      const newCardNumbers = [...cardNumbers];
      newCardNumbers[index] = value;
      setCardInfo((prev) => {
        return {
          ...prev,
          cardNumbers: [
            newCardNumbers[0],
            newCardNumbers[1],
            newCardNumbers[2],
            newCardNumbers[3],
          ],
        };
      });

      if (value.length === 4) {
        focusNextInput(index);
      }
    }
  };
  return {
    handleCardNumbers,
  };
};

export default useCardNumbers;
