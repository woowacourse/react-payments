import { useEffect, useState } from 'react';
import { OWNER_NAME } from '../constants/cardSection';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

const inputLimitValidation: ValidationType = {
  isError: (state: string) => state !== '' && !validate.isEnglish(state),
  errorMessage: OWNER_NAME.errorMessage,
};

const useName = () => {
  const name = useInput<HTMLInputElement>(inputLimitValidation);
  const [isValidName, setIsValidName] = useState(false);

  useEffect(() => {
    const isValid = name.value !== '' && !name.isError;

    setIsValidName(isValid);
  }, [name]);

  return { name, isValidName };
};

export default useName;
