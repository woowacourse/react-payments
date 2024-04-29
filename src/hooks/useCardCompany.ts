import { useEffect, useState } from 'react';
import useInput from './useInput';

const useCardCompany = () => {
  const cardCompany = useInput<HTMLSelectElement>();
  const [isValidCardCompany, setIsValidCardCompany] = useState(false);

  useEffect(() => {
    const isValid = cardCompany.value !== '' && !cardCompany.isError;

    setIsValidCardCompany(isValid);
  }, [cardCompany.value]);

  return { cardCompany, isValidCardCompany };
};

export default useCardCompany;
