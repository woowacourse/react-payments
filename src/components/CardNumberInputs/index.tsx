import { useState } from 'react';
import CardNumberInputsView from './CardNumberInputsView';

export interface CardNumberInputsProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CARD_NUMBERS_LENGTH = 4;

const CardNumberInputs = ({
  cardNumbers,
  setCardNumbers,
}: CardNumberInputsProps) => {
  const [isErrors, setIsErrors] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

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
      isErrors={isErrors}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardNumberInputs;
