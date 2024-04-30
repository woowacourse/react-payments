import { useEffect, useState } from 'react';
import { CardNumbers } from '../types/card';

const useCardNumbers = (
  initCardNumber1: string,
  initCardNumber2: string,
  initCardNumber3: string,
  initCardNumber4: string
) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    cardNumberFields: {
      cardNumber1: { value: initCardNumber1, errorMessage: '', isError: false },
      cardNumber2: { value: initCardNumber2, errorMessage: '', isError: false },
      cardNumber3: { value: initCardNumber3, errorMessage: '', isError: false },
      cardNumber4: { value: initCardNumber4, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(cardNumbers.cardNumberFields).reduce(
        (pre, cur) => {
          if (!cur.isError && cur.value !== '' && cur.value.length === 4) {
            return pre + 1;
          }
          return pre;
        },
        0
      );
      return isNotAllError === 4;
    };
    if (checkCompleteInput()) {
      setCardNumbers((prev: CardNumbers) => ({
        ...prev,
        isNextField: true,
      }));
    }
  }, [cardNumbers.cardNumberFields]);

  const handleUpdateCardNumberInput = (index: number, value: string) => {
    const cardKey =
      `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields;
    setCardNumbers((prevState: CardNumbers) => {
      return {
        ...prevState,
        cardNumberFields: {
          ...prevState.cardNumberFields,
          [cardKey]: {
            ...prevState.cardNumberFields[cardKey],
            value: value,
          },
        },
      };
    });
  };

  const handleUpdateCardNumberErrorMessages = (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey =
      `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields;
    setCardNumbers((prevState: CardNumbers) => {
      return {
        ...prevState,
        cardNumberFields: {
          ...prevState.cardNumberFields,
          [cardKey]: {
            ...prevState.cardNumberFields[cardKey],
            errorMessage: errorMessage,
            isError: isError,
          },
        },
      };
    });
  };
  return {
    cardNumbers,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
  };
};

export default useCardNumbers;
