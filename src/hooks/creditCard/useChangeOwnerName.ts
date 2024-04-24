import { useState } from 'react';
import { ERROR_MESSAGE } from '@constants/index';
import { isValidOwnerNameInput } from '@utils/validator';

const initialOwnerNameError = { isError: false, errorMessage: '' };

const useChangeOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerNameError, setOwnerNameError] = useState(initialOwnerNameError);

  const handleOwnerNameChange = (value: string) => {
    if (!isValidOwnerNameInput(value)) {
      setOwnerNameError({
        isError: true,
        errorMessage: ERROR_MESSAGE.invalidOwnerNameInput,
      });

      return;
    }

    setOwnerName(value);
    setOwnerNameError(initialOwnerNameError);
  };

  return { ownerName: ownerName.toUpperCase(), ownerNameError, handleOwnerNameChange };
};

export default useChangeOwnerName;
