import { useState } from 'react';

import { Outlet, useNavigate } from 'react-router';

import { ROUTES } from '@/constants/routes';

import { postCards } from '@/services/apis/cards/cards';
import { mapCardModelToRequestDTO } from '@/services/apis/cards/mapper';

import { useCardNumbers } from '../form/hooks/useCardNumbers';
import { useCard } from '../form/hooks/useCard';
import { useExpirationDate } from '../form/hooks/useExpirationDate';
import { useCvc } from '../form/hooks/useCvc';
import { usePassword } from '../form/hooks/usePassword';

import { getBrandCard } from '../form/utils';

import { ERROR_CODE } from './constants';

export const Flow = () => {
  const cardNumbers = useCardNumbers();

  const card = useCard();

  const expirationDate = useExpirationDate();

  const cvc = useCvc();

  const password = usePassword();

  const brandCard = getBrandCard(Object.values(cardNumbers.values));

  const navigate = useNavigate();

  const handleReset = () => {
    cardNumbers.reset();
    card.reset();
    expirationDate.reset();
    cvc.reset();
    password.reset();
  };

  const [serverError, setServerError] = useState<keyof typeof ERROR_CODE | null>(null);

  const handleSubmit = async () => {
    try {
      const data = mapCardModelToRequestDTO({
        card: card.values.card,
        cardNumbers: cardNumbers.values,
        cvc: cvc.values.cvc,
        expirationDate: expirationDate.values,
      });

      await postCards(data);
      navigate(ROUTES.PAYMENTS.CARDS);
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const errorCode = error.code as keyof typeof ERROR_CODE;
        setServerError(errorCode);
      }
    }
  };

  return (
    <Outlet
      context={{
        cardNumbers,
        card,
        expirationDate,
        cvc,
        password,
        brandCard,
        handleSubmit,
        handleReset,
        serverError,
      }}
    />
  );
};
