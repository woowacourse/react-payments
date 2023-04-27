import { CardContext } from 'CardProvider';
import { checkCreditCardValidations } from 'domains/creditCard';
import { useContext } from 'react';

const useCreditCard = () => {
  const { creditCard, setCreditCard } = useContext(CardContext);
  const isCreditCardError = checkCreditCardValidations(creditCard);

  return { creditCard, setCreditCard, isCreditCardError };
};

export default useCreditCard;
