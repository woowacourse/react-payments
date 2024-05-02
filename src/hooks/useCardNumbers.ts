import { useEffect, useState } from 'react';
import { CardNumbers } from '../types/card';
import { CARD_NUMBER } from '../constants/system';

const useCardNumbers = (
  initCardNumber1: string = '',
  initCardNumber2: string = '',
  initCardNumber3: string = '',
  initCardNumber4: string = ''
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
        (count, field) => {
          if (!field.isError && field.value !== '' && field.value.length === CARD_NUMBER.FIELD_LENGTH) {
            return count + 1;
          }
          return count;
        },
        0
      );
      return isNotAllError === CARD_NUMBER.TOTAL_FIELDS;
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
