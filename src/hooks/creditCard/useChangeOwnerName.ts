import { useState } from 'react';

const useChangeOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerNameError, setOwnerNameError] = useState({ isError: false, errorMessage: '' });

  const handleOwnerNameChange = (value: string) => {
    const error = /^[A-Z\s]+$/.test(value)
      ? { isError: false, errorMessage: '' }
      : { isError: true, errorMessage: '카드 소유자 이름은 대문자로 입력해야 합니다.' };

    setOwnerName(value);
    setOwnerNameError(error);
  };

  return { ownerName, ownerNameError, handleOwnerNameChange };
};

export default useChangeOwnerName;
