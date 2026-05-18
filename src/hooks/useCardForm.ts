import type {
  CardStatus,
  CardHandler,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardPassword,
  CardPasswordHandler,
  CardCompanyStatus,
  CardCompanyHandler,
} from '../types/cardStausTypes';
import { useCardNumber } from './useCardNumber';
import { useExpiryDate } from './useExpiryDate';
import { useCardCvc } from './useCardCvc';
import { useCardPassword } from './useCardPassword';
import { useCardCompany } from './useCardCompany';

export type CardFormState = {
  cardNumber: CardStatus;
  cardExpiry: CardExpiry;
  cardCvc: Cvc;
  cardPassword: CardPassword;
  cardCompanyStatus: CardCompanyStatus;
};

export type CardFormHandlers = {
  cardNumberHandler: CardHandler;
  expiryHandler: ExpireHandler;
  cvcHandler: CvcHandler;
  cardPasswordHandler: CardPasswordHandler;
  cardCompanyHandler: CardCompanyHandler;
};

export function useCardForm() {
  const { cardNumber, cardNumberHandler } = useCardNumber();
  const { cardExpiry, expiryHandler } = useExpiryDate();
  const { cardCvc, cvcHandler } = useCardCvc();
  const { cardPassword, cardPasswordHandler } = useCardPassword();
  const { cardCompanyStatus, cardCompanyHandler } = useCardCompany();

  const isCvcComplete = cardCvc.cardCvc.length === 3 && cardCvc.cardCvcErrorMode === null;
  const isComplete =
    isCvcComplete &&
    cardPassword.cardPassword.length === 2 &&
    cardPassword.cardPasswordErrorMode === null;

  return {
    form: {
      cardNumber,
      cardExpiry,
      cardCvc,
      cardPassword,
      cardCompanyStatus,
    } satisfies CardFormState,
    handlers: {
      cardNumberHandler,
      expiryHandler,
      cvcHandler,
      cardPasswordHandler,
      cardCompanyHandler,
    } satisfies CardFormHandlers,
    isComplete,
  };
}
