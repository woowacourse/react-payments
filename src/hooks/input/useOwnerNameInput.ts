import { useState } from 'react';
import { isEnglish, isOverMaxLength } from '../../utils/validator';
import { ERROR, MAX_NAME_SIZE } from '../../constants';
import { OwnerName } from '../../types';

interface Props {
  setOwnerName: (input: OwnerName) => void;
  moveFocusToSecurityCode?: () => void;
}

export const useOwnerNameInput = ({ setOwnerName, moveFocusToSecurityCode }: Props) => {
  const [ownerNameError, setOwnerNameError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e.target.value.toUpperCase());

    if (!isEnglish(e.target.value) || isOverMaxLength(e.target.value, MAX_NAME_SIZE)) {
      setOwnerNameError(ERROR.INVALID_OWNER_NAME);
      e.target.focus();
      return;
    }

    setOwnerNameError('');
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && moveFocusToSecurityCode) moveFocusToSecurityCode();
  };

  return {
    ownerNameError,
    handleInputChange,
    handleEnterPress,
  };
};
