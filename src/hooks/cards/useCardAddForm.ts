import { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CardFormData } from '../../types';
import { PATH } from '../../constants';
import { useCardListContext } from '../../contexts/CardListContext';
import { useCardInputValidation } from './useCardInputValidation';
import { useFormComplete } from '../common/useFormComplete';

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
      setCardInformation((information) => ({ ...information, [key]: value }));
      updateInputValidation(key, value);
    },
    [updateInputValidation]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormComplete) {
      triggerAllInputErrors();
      return;
    }

    const newCard = {
      ...cardInformation,
      id: newCardId,
      cardName: `카드 ${cardListLength + 1}`,
    };

    addCard(newCard);
    navigate(`${PATH.REGISTER}/${newCard.id}`, { state: newCard });
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
