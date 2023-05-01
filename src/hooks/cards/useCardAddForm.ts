import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { CardFormData } from '../../types';
import { useCardListContext } from '../../contexts/CardListContext';
import { useCardInputValidation } from './useCardInputValidation';
import { useFormComplete } from '../common/useFormComplete';
import { PATH } from '../../constants';

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

const useCardAddForm = () => {
  const { newCardId, cardListLength, addCard } = useCardListContext();
  const [cardInformation, setCardInformation] = useState(initialValue);
  const {
    inputValidation,
    inputError,
    updateInputValidation,
    updateInputError,
    triggerAllInputErrors,
  } = useCardInputValidation();
  const isFormComplete = useFormComplete(inputValidation);

  const navigate = useNavigate();

  const updateInputValue = useCallback(
    <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => {
      setCardInformation((prevCardInformation) => ({ ...prevCardInformation, [key]: value }));
      updateInputValidation(key, value);
    },
    [updateInputValidation]
  );

  const handleErrorInputFocus = (event: FormEvent<HTMLFormElement>) => {
    if (!inputValidation.issuer) {
      const issuerInputButton = Array.from(event.currentTarget.elements).find(
        (element): element is HTMLButtonElement =>
          element.tagName === 'BUTTON' && (element as HTMLButtonElement).name === 'issuer'
      );

      issuerInputButton?.focus();
    }

    if (inputValidation.issuer) {
      const errorInputElement = Array.from(event.currentTarget.elements).find(
        (element): element is HTMLInputElement =>
          element.tagName === 'INPUT' && !(element as HTMLInputElement).validity.valid
      );

      errorInputElement?.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormComplete) {
      triggerAllInputErrors();
      handleErrorInputFocus(event);

      return;
    }

    const newCard = {
      ...cardInformation,
      id: newCardId,
      cardName: `카드 ${cardListLength + 1}`,
    };

    addCard(newCard);
    navigate(`${PATH.REGISTER}/?id=${newCard.id}`);
  };

  return {
    cardInformation,
    inputError,
    updateInputValue,
    updateInputError,
    handleSubmit,
  };
};

export { useCardAddForm };
