import React, { useEffect, useState } from 'react';
import CardNumberInputsView from './CardNumberInputsView';

export interface CardNumberInputsProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CARD_NUMBERS_LENGTH = 4;
const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CardNumberInputs = ({
  cardNumbers,
  setCardNumbers,
}: CardNumberInputsProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrors, setIsErrors] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isErrors.every((error) => error === false)) {
      setErrorMessage('');
    }
  }, [isErrors]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    setCardNumbers((prev) => {
      const newState = [...prev];
      if (/^[0-9]*$/.test(value) && value.length <= CARD_NUMBERS_LENGTH) {
        newState[index] = value;
        setIsErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = false;
          return newErrors;
        });
      } else {
        setErrorMessage(ERROR_MESSAGE);
        setIsErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = true;
          return newErrors;
        });
      }
      return newState;
    });
  };

  return (
    <CardNumberInputsView
      cardNumbers={cardNumbers}
      errorMessage={errorMessage}
      isErrors={isErrors}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardNumberInputs;
