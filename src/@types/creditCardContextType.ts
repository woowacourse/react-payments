import CreditCardInfo from './creditCardInfo';

type CreditCardContextType = {
  creditCard: CreditCardInfo;
  setCreditCard: <T extends keyof CreditCardInfo>(target: T, newValue: CreditCardInfo[T]) => void;
  initCreditCard: () => void;
};

export default CreditCardContextType;
