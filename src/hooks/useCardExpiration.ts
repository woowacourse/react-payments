import { ChangeEvent } from 'react';
import { validateCardExpiration } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardExpiration {
  cardExpiration: string[];
  errorMessageCardExpiration: string[];
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
  focusNextInput: (currentInput: HTMLInputElement) => void;
}

const useCardExpiration = ({
  cardExpiration,
  errorMessageCardExpiration,
  setCardInfo,
  setErrorMessage,
  focusNextInput,
}: IUseCardExpiration) => {
  const handleCardExpiration = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;
    const errorMessageCopy = [...errorMessageCardExpiration];
    errorMessageCopy[index] = validateCardExpiration(value, index);

    setErrorMessage((prev) => {
      return {
        ...prev,
        cardExpiration: [errorMessageCopy[0], errorMessageCopy[1]],
      };
    });

    if (errorMessageCopy[index] === '') {
      const newCardExpiration = [...cardExpiration];
      newCardExpiration[index] = value;

      setCardInfo((prev) => {
        return {
          ...prev,
          cardExpiration: [newCardExpiration[0], newCardExpiration[1]],
        };
      });

      if (value.length === 2) {
        focusNextInput(event.target);
      }
    }
  };
  return {
    handleCardExpiration,
  };
};

export default useCardExpiration;
