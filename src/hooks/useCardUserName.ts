import { ChangeEvent } from 'react';
import { validateUserName } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardUserName {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardUserName = ({
  setCardInfo,
  setErrorMessage,
}: IUseCardUserName) => {
  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessageCopy = validateUserName(value);

    setErrorMessage((prev) => {
      return {
        ...prev,
        userName: [errorMessageCopy],
      };
    });

    if (errorMessageCopy === '') {
      setCardInfo((prev) => {
        return {
          ...prev,
          userName: value.toUpperCase(),
        };
      });
    }
  };
  return {
    handleCardUserName,
  };
};

export default useCardUserName;
