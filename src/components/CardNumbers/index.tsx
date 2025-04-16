import React, { useEffect, useState } from 'react';
import CardNumbersView from './CardNumbersView';

export interface CardNumbersProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardNumbers: React.FC<CardNumbersProps> = ({
  cardNumbers,
  setCardNumbers,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    if (errors.every((error) => error === false)) {
      setErrorMessage('');
    }
  }, [errors]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    setCardNumbers((prev) => {
      const newState = [...prev];
      if (/^[0-9]*$/.test(value) && value.length <= 4) {
        newState[index] = value;
        setErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = false;
          return newErrors;
        });
      } else {
        setErrorMessage('숫자만 가능합니다.');
        setErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = true;
          return newErrors;
        });
      }
      return newState;
    });
  };

  return (
    <CardNumbersView
      cardNumbers={cardNumbers}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardNumbers;
