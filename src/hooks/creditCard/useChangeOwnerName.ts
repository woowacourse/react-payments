import { useState } from 'react';

const useChangeOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerNameError, setOwnerNameError] = useState({ isError: false, errorMessage: '' });

  const handleOwnerNameChange = (value: string) => {
    const isValidName = /^[A-Za-z]{0,}$/.test(value);

    const newOwnerNameError = isValidName
      ? { isError: false, errorMessage: '' }
      : { isError: true, errorMessage: '카드 소유자 이름은 영문으로 입력해야 합니다.' };

    setOwnerNameError(newOwnerNameError);

    if (!isValidName) return;

    setOwnerName(value);
  };

  return { ownerName: ownerName.toUpperCase(), ownerNameError, handleOwnerNameChange };
};

export default useChangeOwnerName;
