import { ChangeEvent } from 'react';
import { validateUserName } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';
import useInput from './useInput';

interface IUseCardUserName {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardUserName = ({
  setCardInfo,
  setErrorMessage,
}: IUseCardUserName) => {
  const { handleInputChange } = useInput({
    setCardInfo,
    setErrorMessage,
    validateInput: validateUserName,
    key: 'userName',
  });

  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    const { value } = event.target;
    if (validateUserName(value) === '') {
      setCardInfo((prev) => ({
        ...prev,
        userName: value.toUpperCase(),
      }));
    }
  };

  return {
    handleCardUserName,
  };
};

export default useCardUserName;
