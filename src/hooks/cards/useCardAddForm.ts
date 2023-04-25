import { ChangeEvent, FormEvent, MouseEvent, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardFormData } from '../../types';
import { PATH } from '../../constants';
import { CardListContext } from '../../contexts/CardListContext';
import { useCardInputValidation } from './useCardInputValidation';
import formatChecker from '../../utils/formatChecker';
import formatter from '../../utils/formatter';
import { validateMultipleInputField } from '../../utils/validator';
import { isKeyOfObj } from '../../utils/typeUtils';

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
  const { newCardId, cardListLength, addCard } = useContext(CardListContext);
  const [cardInformation, setCardInformation] = useState(initialValue);
  const [cardInputValidation, handleValidationChange] = useCardInputValidation();
  const navigate = useNavigate();

  const onButtonInputChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { name, value } = event.currentTarget;

      setCardInformation((information) => ({ ...information, [name]: value }));
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

      setCardInformation((information) => ({ ...information, [name]: formattedValue }));
      handleValidationChange(name as keyof CardFormData, value);
    },
    [handleValidationChange]
  );

  const onMultipleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value, dataset } = event.target;

      if (!validateMultipleInputField(name) || !formatChecker[name](value)) return;

      setCardInformation((information) => {
        const changeInformation: string[] = [...information[name]];
        changeInformation[Number(dataset.index)] = value;

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    cardInputValidation,
    onButtonInputChange,
    onSingleInputChange,
    onMultipleInputChange,
    handleSubmit,
  };
};

export { useCardAddForm };
