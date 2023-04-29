import { useState } from 'react';

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState<string>('');

  const isSetOwnerName = (value: string) => {
    if (value.length === 0) setOwnerName('');
    if (/[^A-Za-z\s]+$/.test(value)) return false;

    setOwnerName(value);
    return true;
  };

  return { ownerName, isSetOwnerName };
};

export default useOwnerName;
