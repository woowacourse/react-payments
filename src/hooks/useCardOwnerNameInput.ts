import { useState } from 'react';
import { INPUT_RULES } from '../constants/card-app';

const useCardOwnerNameInput = () => {
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [cardOwnerNameError, setCardOwnerNameError] = useState<boolean>(false);
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false);

  const handleCardOwnerNameChange = (value: string) => {
    const isAlphabetInput = /^[a-zA-Z ]*$/.test(value);
    const isValidOwnerName = value.length <= INPUT_RULES.maxCardOwnerNameLength;

    setCardOwnerNameError(!isAlphabetInput || !isValidOwnerName);

    if (!isAlphabetInput || !isValidOwnerName) return;

    setCardOwnerName(value.toUpperCase());
    setIsNextVisible(true);
  };

  const updateValue = (value: string) => {
    const isAlphabetInput = /^[a-zA-Z ]*$/.test(value);
    const isValidOwnerName = value.length <= INPUT_RULES.maxCardOwnerNameLength;

    setCardOwnerNameError(!isAlphabetInput || !isValidOwnerName);

    if (!isAlphabetInput || !isValidOwnerName) return;

    setCardOwnerName(value.toUpperCase());
  };

  return {
    cardOwnerNameState: {
      value: cardOwnerName,
      error: cardOwnerNameError,
      isComplete: !cardOwnerNameError && cardOwnerName.length > 0,
      isNextVisible: isNextVisible,
    },
    handleCardOwnerNameChange,
    updateValue,
  };
};

export default useCardOwnerNameInput;
