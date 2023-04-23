import { useState } from 'react';
import { NOT_A_NUMBER_REGEX } from '../constants/regex';

const useCardPassword = () => {
  const [password, setPassword] = useState<Record<number, string>>({
    0: '',
    1: '',
  });

  const checkPassword = (order: number, value: string) => {
    if (NOT_A_NUMBER_REGEX.test(value)) return false;
    setPassword({ ...password, [order]: value });
    return true;
  };

  return { password, checkPassword };
};

export default useCardPassword;
