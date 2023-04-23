import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../types';
import formatChecker from '../utils/formatChecker';
import formatter from '../utils/formatter';
import { isKeyOfObj } from '../utils/typeUtils';
import { validateMultipleInputField } from '../utils/validator';

const useCardForm = (addCard: Dispatch<SetStateAction<Card[]>>) => {
  const [cardInformation, setCardInformation] = useState<Card>({
    issuer: '',
    cardNumber: '',
    expirationDate: {
      month: '',
      year: '',
    },
    ownerName: '',
    securityCode: '',
    password: ['', ''],
  });

  const navigate = useNavigate();

  const handleSingleInputFieldChange = useCallback((name: string, value: string) => {
    if (isKeyOfObj(formatChecker, name) && !formatChecker[name](value)) return;

    const formattedValue = isKeyOfObj(formatter, name) ? formatter[name](value) : value;

    setCardInformation((information) => {
      return {
        ...information,
        [name]: formattedValue,
      };
    });
  }, []);

  const handleMultipleInputFieldChange = useCallback(
    (name: string, value: string, index: number) => {
      if (!validateMultipleInputField(name) || !index) return;
      if (isKeyOfObj(formatChecker, name) && !formatChecker[name](value)) return;

      setCardInformation((information) => {
        const changeInformation: string[] = [...information[name]];
        changeInformation[index] = value;

        return {
          ...information,
          [name]: changeInformation,
        };
      });
    },
    []
  );

  const handleSubmit = () => {
    addCard((cardList) => {
      return [...cardList, cardInformation];
    });
    navigate('/');
  };

  return {
    cardInformation,
    handleSingleInputFieldChange,
    handleMultipleInputFieldChange,
    handleSubmit,
  };
};

export { useCardForm };
