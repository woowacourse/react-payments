import { useEffect, useState } from 'react';
import { RegisterFieldInfos } from '@/types';
import validate from '../utils/validate';

const useDetectComplete = ({
  cardNumbers,
  month,
  year,
  cvc,
  password,
  name,
}: RegisterFieldInfos) => {
  const [isValidAllFormStates, setIsValidAllFormStates] = useState(false);

  useEffect(() => {
    if (validate.isValidAllFormStates({ cardNumbers, month, year, cvc, password, name })) {
      setIsValidAllFormStates(true);

      return;
    }

    setIsValidAllFormStates(false);
  }, [month, year, cardNumbers, cvc, name, password]);

  return { isValidAllFormStates };
};

export default useDetectComplete;
