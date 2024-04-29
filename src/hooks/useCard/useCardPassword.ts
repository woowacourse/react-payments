import { UseCardPasswordReturnType } from '../../types/hooks';
import validateCardPassword from '../../validator/validateCardPassword';
import validateNumber from '../../validator/validateNumber';
import useInput from '../useInput';

const useCardPassword = (): UseCardPasswordReturnType => {
  const cardPasswordInfo = useInput('', {
    onChange: validateNumber,
    onBlur: validateCardPassword,
  });

  return cardPasswordInfo;
};

export default useCardPassword;
