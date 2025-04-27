import { CardExpirationDateOptions } from '@/types/CardExpirationDateOptions';
import { CardNumbersOptions } from '@/types/CardNumbers';
import { useEffect, useState } from 'react';
import { useCardCVCNumberOptions } from './useCardCVCNumber';
type UseFieldCompletionProps = {
  cardNumbersForm: CardNumbersOptions;
  cardCompany: string;
  cardExpirationDateForm: CardExpirationDateOptions;
  cardCVCNumberForm: useCardCVCNumberOptions;
};

const useFieldCompletion = ({
  cardNumbersForm,
  cardCompany,
  cardExpirationDateForm,
  cardCVCNumberForm,
}: UseFieldCompletionProps) => {
  const [isFieldCompletetion, setIsFieldCompletetion] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (
      Object.values(cardNumbersForm.cardNumbers).every(
        (value) => value.length === 4
      )
    ) {
      setIsFieldCompletetion((prev) => {
        const newArray = [...prev];
        newArray[0] = true;
        return newArray;
      });
    }

    if (cardCompany !== '') {
      setIsFieldCompletetion((prev) => {
        const newArray = [...prev];
        newArray[1] = true;
        return newArray;
      });
    }
    if (
      Object.values(cardExpirationDateForm.cardExpirationDate).every(
        (value) => value.length === 2
      )
    ) {
      setIsFieldCompletetion((prev) => {
        const newArray = [...prev];
        newArray[2] = true;
        return newArray;
      });
    }
    if (Object.values(cardCVCNumberForm.cardCVCNumber).length === 3) {
      setIsFieldCompletetion((prev) => {
        const newArray = [...prev];
        newArray[3] = true;
        return newArray;
      });
    }
  }, [cardCVCNumberForm, cardCompany, cardExpirationDateForm, cardNumbersForm]);

  return isFieldCompletetion;
};

export default useFieldCompletion;
