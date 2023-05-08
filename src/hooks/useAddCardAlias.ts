import { useEffect, useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useAddCardAlias = () => {
  const [cardAlias, setCardAlias] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const validateAlias = (alias: string) => {
    if (REG_EXP.cardAliasForm.test(alias)) return;

    setCardAlias(alias);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return { cardAlias, isLoading, validateAlias };
};

export default useAddCardAlias;
