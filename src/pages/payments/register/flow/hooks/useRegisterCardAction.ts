import { useNavigate } from 'react-router';

import { useExecute } from '@/services/core/useExecute';

import { ROUTES } from '@/constants/routes';

import repository from '@/services/apis/cards/repository';

import { ERROR_CODE } from '../constants';

interface Options {
  values: {
    cardNumbers: { values: { [key in '0' | '1' | '2' | '3']: string } };
    card: { values: { card: string } };
    cvc: { values: { cvc: string } };
    expirationDate: { values: { month: string; year: string } };
  };
}

export const useRegisterCardAction = ({ values: { cardNumbers, card, cvc, expirationDate } }: Options) => {
  const navigate = useNavigate();

  const {
    status: { error },
    mutate,
  } = useExecute({
    executeFn: async () => {
      return await repository.postCards({
        cardNumbers: cardNumbers.values,
        card: card.values.card,
        cvc: cvc.values.cvc,
        expirationDate: expirationDate.values,
      });
    },
    onSuccess: () => {
      navigate(ROUTES.PAYMENTS.CARDS);
    },
  });

  const serverError =
    typeof error === 'object' && error !== null && 'code' in error && (error.code as keyof typeof ERROR_CODE);

  return {
    serverError,
    mutate,
  };
};
