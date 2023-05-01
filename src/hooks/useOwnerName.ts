import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState<string>('');

  const isSetOwnerName = (value: string) => {
    if (value.length === 0) setOwnerName('');
    if (REG_EXP.cardNameForm.test(value)) return false;

    setOwnerName(value);
    return true;
  };

  return { ownerName, isSetOwnerName };
};

export default useOwnerName;
