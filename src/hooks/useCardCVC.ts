import { validateCVC } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';
import useInput from './useInput';

interface IUseCardCVC {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardCVC = ({ setCardInfo, setErrorMessage }: IUseCardCVC) => {
  const { handleInputChange: handleCardCVC } = useInput({
    setCardInfo,
    setErrorMessage,
    validateInput: validateCVC,
    key: 'cvc',
  });

  return {
    handleCardCVC,
  };
};

export default useCardCVC;
