import { useState } from 'react';

const usePassword = () => {
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);

  const isSetPasswords = (order: number, value: string) => {
    if (/[^0-9]/g.test(value)) return false;

    setPasswords({ ...passwords, [order]: value });
    return true;
  };

  return { passwords, isSetPasswords };
};

export default usePassword;
