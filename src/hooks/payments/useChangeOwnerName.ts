import { useState } from 'react';
import { ERROR_MESSAGE } from '@constants/index';
import { isValidOwnerNameInput } from '@utils/validator';

const initialState = { isSuccess: false, isError: false, errorMessage: '' };

const useChangeOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerNameState, setOwnerNameState] = useState(initialState);

  const handleOwnerNameChange = (value: string) => {
    if (!isValidOwnerNameInput(value)) {
      setOwnerNameState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: ERROR_MESSAGE.invalidOwnerNameInput,
      }));
      return;
    }

    if (value.length > 0) {
      setOwnerNameState({ ...initialState, isSuccess: true });
    }
    // else {
    //   setOwnerNameState(initialState);
    // }

    setOwnerName(value);
  };

  return { ownerName: ownerName.toUpperCase(), ownerNameState, handleOwnerNameChange };
};

export default useChangeOwnerName;
