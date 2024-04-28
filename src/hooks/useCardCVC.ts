import { ChangeEvent } from 'react';
import { validateCVC } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardCVC {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardCVC = ({ setCardInfo, setErrorMessage }: IUseCardCVC) => {
  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessageCopy = validateCVC(value);
    setErrorMessage((prev) => {
      return {
        ...prev,
        cvc: [errorMessageCopy],
      };
    });

    if (errorMessageCopy === '') {
      setCardInfo((prev) => {
        return {
          ...prev,
          cvc: value,
        };
      });
    }
  };
  return {
    handleCardCVC,
  };
};

export default useCardCVC;
