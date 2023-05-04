import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { CardFormData, CardFormValidation } from '../../types';
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
  const { newCardId, addCard, generateDefaultCardName } = useCardListContext();
  const [cardInformation, setCardInformation] = useState(initialValue);
  const {
    inputValidation,
    inputError,
    updateInputValidation,
    updateInputError,
    triggerAllInputErrors,
  } = useCardInputValidation();
  const [isRegistering, setIsRegistering] = useState(false);
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
    const errorInputElement = Array.from(event.currentTarget.elements).find(
      (element): element is HTMLInputElement | HTMLButtonElement =>
        (element instanceof HTMLInputElement || element instanceof HTMLButtonElement) &&
        !inputValidation[element.name as keyof CardFormValidation]
    );

    errorInputElement?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormComplete) {
      triggerAllInputErrors();
      handleErrorInputFocus(event);

      return;
    }

    setIsRegistering(true);

    const newCard = {
      ...cardInformation,
      id: newCardId,
      cardName: generateDefaultCardName(cardInformation.ownerName, cardInformation.issuer),
    };

    setTimeout(() => {
      setIsRegistering(false);
      addCard(newCard);
      navigate(`${PATH.REGISTER}/?id=${newCard.id}`);
    }, 3000);
  };

  return {
    cardInformation,
    inputError,
    isRegistering,
    updateInputValue,
    updateInputError,
    handleSubmit,
  };
};

export { useCardAddForm };
