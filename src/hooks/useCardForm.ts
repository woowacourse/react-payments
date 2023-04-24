import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardFormData } from '../types';
import { useCardFormValidation } from './useCardFormValidation';
import formatChecker from '../utils/formatChecker';
import formatter from '../utils/formatter';
import { isKeyOfObj } from '../utils/typeUtils';
import { validateMultipleInputField } from '../utils/validator';
import { isElementOfType } from '../utils/eventUtils';

const initialValue: CardFormData = {
  issuer: '',
  cardNumber: '',
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: ['', ''],
};

const useCardForm = (addCard: (cardInformation: CardFormData) => void) => {
  const [cardInformation, setCardInformation] = useState(initialValue);
  const [cardValidation, handleValidationChange] = useCardFormValidation();

  const navigate = useNavigate();

  const onButtonInputChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (!isElementOfType<HTMLButtonElement>(event)) return;

      const { name, value } = event.target;

      setCardInformation((information) => {
        return {
          ...information,
          [name]: value,
        };
      });
      handleValidationChange(name as keyof CardFormData, value);
    },
    [handleValidationChange]
  );

  const onSingleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target;
      const value = event.target.dataset.value ?? event.target.value;

      if (isKeyOfObj(formatChecker, name) && !formatChecker[name](value)) return;

      const formattedValue = isKeyOfObj(formatter, name) ? formatter[name](value) : value;
      setCardInformation((information) => {
        return {
          ...information,
          [name]: formattedValue,
        };
      });
      handleValidationChange(name as keyof CardFormData, value);
    },
    [handleValidationChange]
  );

  const onMultipleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        name,
        value,
        dataset: { index },
      } = event.target;

      if (!validateMultipleInputField(name) || index === undefined) return;
      if (isKeyOfObj(formatChecker, name) && !formatChecker[name](value)) return;

      setCardInformation((information) => {
        const changeInformation: string[] = [...information[name]];
        changeInformation[Number(index)] = value;

        const newInformation = {
          ...information,
          [name]: changeInformation,
        };
        handleValidationChange(name, newInformation[name]);

        return newInformation;
      });
    },
    [handleValidationChange]
  );

  const handleSubmit = () => {
    addCard(cardInformation);
    navigate('/');
  };

  return {
    cardInformation,
    cardValidation,
    onButtonInputChange,
    onSingleInputChange,
    onMultipleInputChange,
    handleSubmit,
  };
};

export { useCardForm };
