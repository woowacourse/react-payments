import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const usePassword = () => {
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);

  const isSetPasswords = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) return false;

    setPasswords({ ...passwords, [order]: value });
    return true;
  };

  return { passwords, isSetPasswords };
};

export default usePassword;
