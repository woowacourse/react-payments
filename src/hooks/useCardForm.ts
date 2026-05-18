import type {
  CardStatus,
  CardHandler,
  CardExpiry,
  ExpiryHandler,
  Cvc,
  CvcHandler,
  CardPassword,
  CardPasswordHandler,
  CardCompanyStatus,
  CardCompanyHandler,
} from '../types/cardStatusTypes';
import { useCardNumber } from './useCardNumber';
import { useCardExpiry } from './useCardExpiry';
import { useCardCvc } from './useCardCvc';
import { useCardPassword } from './useCardPassword';
import { useCardCompany } from './useCardCompany';
import { isValidCardNumber } from '../utils/card/cardBrand';

export type CardFormState = {
  cardNumber: CardStatus;
  cardExpiry: CardExpiry;
  cardCvc: Cvc;
  cardPassword: CardPassword;
  cardCompanyStatus: CardCompanyStatus;
};

export type CardFormHandlers = {
  cardNumberHandler: CardHandler;
  expiryHandler: ExpiryHandler;
  cvcHandler: CvcHandler;
  cardPasswordHandler: CardPasswordHandler;
  cardCompanyHandler: CardCompanyHandler;
};

export function useCardForm() {
  const { cardNumber, cardNumberHandler } = useCardNumber();
  const { cardExpiry, expiryHandler } = useCardExpiry();
  const { cardCvc, cvcHandler } = useCardCvc();
  const { cardPassword, cardPasswordHandler } = useCardPassword();
  const { cardCompanyStatus, cardCompanyHandler } = useCardCompany();

  const isCardNumberComplete =
    isValidCardNumber(cardNumber.cardNumbers, cardNumber.cardBrand) &&
    cardNumber.cardNumberErrorMode === null;
  const isCardCompanySelected = cardCompanyStatus.cardCompany !== '';
  const isExpiryDateComplete =
    cardExpiry.cardExpiryDate.every((date) => date.length === 2) &&
    cardExpiry.cardExpiryDateErrorMode === null;
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
    completion: {
      isCardNumberComplete,
      isCardCompanySelected,
      isExpiryDateComplete,
      isCvcComplete,
      isComplete,
    },
  };
}
