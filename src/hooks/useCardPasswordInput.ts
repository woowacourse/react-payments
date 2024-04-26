import { useEffect, useState } from 'react';
import { INPUT_RULES } from '../constants/card-app';

const useCardPasswordInput = () => {
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordError, setCardPasswordError] = useState<boolean>(false);
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false);

  const handleCardPasswordChange = (value: string) => {
    const isNumberInput = /^[0-9]*$/.test(value);
    const isValidCardPassword = value.length <= INPUT_RULES.maxCardPasswordLength;

    setCardPasswordError(!isNumberInput);
    if (!isNumberInput || !isValidCardPassword) return;

    setCardPassword(value);
  };

  const isCardPasswordComplete = !cardPasswordError && cardPassword.length === INPUT_RULES.maxCardPasswordLength;

  useEffect(() => {
    setIsNextVisible((prev) => prev || isCardPasswordComplete);
  }, [isCardPasswordComplete]);

  return {
    cardPasswordState: {
      value: cardPassword,
      error: cardPasswordError,
      isComplete: isCardPasswordComplete,
      isNextVisible: isNextVisible,
    },
    handleCardPasswordChange,
  };
};

export default useCardPasswordInput;
