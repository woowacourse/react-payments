import { validatePassword } from '../validators/newCardInputValidator';
import { ICardInfo, IErrorMessage } from '../types/type';
import useInput from './useInput';

interface IUseCardPasswordProps {
  setCardInfo: React.Dispatch<React.SetStateAction<ICardInfo>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const useCardPassword = ({
  setCardInfo,
  setErrorMessage,
}: IUseCardPasswordProps) => {
  const { handleInputChange } = useInput({
    setCardInfo,
    setErrorMessage,
    validateInput: validatePassword,
    key: 'password',
  });

  return { handleCardPassword: handleInputChange };
};

export default useCardPassword;
