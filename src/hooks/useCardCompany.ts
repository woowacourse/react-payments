import { validateCardCompany } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';
import useInput from './useInput';

interface IUseCardCompany {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardCompany = ({ setCardInfo, setErrorMessage }: IUseCardCompany) => {
  const { handleInputChange } = useInput({
    setCardInfo,
    setErrorMessage,
    validateInput: validateCardCompany,
    key: 'cardCompany',
  });

  return { handleCardCompany: handleInputChange };
};

export default useCardCompany;
