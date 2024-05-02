import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';

interface IUseInput {
  setCardInfo: Dispatch<SetStateAction<ICardInfo>>;
  setErrorMessage: Dispatch<SetStateAction<IErrorMessage>>;
  validateInput: (value: string) => string;
  key: keyof ICardInfo;
}

const useInput = ({
  setCardInfo,
  setErrorMessage,
  validateInput,
  key,
}: IUseInput) => {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    const errorMessageCopy = validateInput(value);

    setErrorMessage((prev) => {
      return { ...prev, [key]: [errorMessageCopy] };
    });

    if (errorMessageCopy === '') {
      setCardInfo((prev) => {
        return { ...prev, [key]: value };
      });
    }
  };

  return { handleInputChange };
};

export default useInput;
