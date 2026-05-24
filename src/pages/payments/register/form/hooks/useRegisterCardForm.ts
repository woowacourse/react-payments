import { useCardNumbers } from './useCardNumbers';
import { useCard } from './useCard';
import { useExpirationDate } from './useExpirationDate';
import { useCvc } from './useCvc';
import { usePassword } from './usePassword';

export const useRegisterCardForm = () => {
  const cardNumbers = useCardNumbers();

  const card = useCard();

  const expirationDate = useExpirationDate();

  const cvc = useCvc();

  const password = usePassword();

  const onReset = () => {
    cardNumbers.reset();
    card.reset();
    expirationDate.reset();
    cvc.reset();
    password.reset();
  };

  return {
    cardNumbers,
    card,
    expirationDate,
    cvc,
    password,
    onReset,
  };
};
