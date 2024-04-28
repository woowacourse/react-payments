import { ChangeEvent } from 'react';
import { validateCardCompany } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardCompany {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardCompany = ({ setCardInfo, setErrorMessage }: IUseCardCompany) => {
  const handleCardCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const errorMessageCopy = validateCardCompany(value);

    setErrorMessage((prev) => {
      return {
        ...prev,
        cardCompany: [errorMessageCopy],
      };
    });

    setCardInfo((prev) => {
      return {
        ...prev,
        cardCompany: value,
      };
    });
  };
  return {
    handleCardCompany,
  };
};

export default useCardCompany;
