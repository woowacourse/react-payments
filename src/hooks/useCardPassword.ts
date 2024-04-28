import { ChangeEvent } from 'react';
import { validatePassword } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseCardPassWord {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardPassword = ({
  setCardInfo,
  setErrorMessage,
}: IUseCardPassWord) => {
  const handleCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessageCopy = validatePassword(value);
    setErrorMessage((prev) => {
      return {
        ...prev,
        password: [errorMessageCopy],
      };
    });

    if (errorMessageCopy === '') {
      setCardInfo((prev) => {
        return {
          ...prev,
          password: value,
        };
      });
    }
  };
  return {
    handleCardPassword,
  };
};

export default useCardPassword;
