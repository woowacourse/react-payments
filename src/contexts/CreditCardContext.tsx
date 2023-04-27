import { PropsWithChildren, createContext, useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';
import { CardCompany } from '../@types/cardCompany';

const initialCreditCardInfo: CreditCardInfo = {
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  ownerName: '',
  securityCode: '',
  password: ['', ''],
  cardCompany: 'hyundai' as CardCompany,
  cardAlias: '',
};

export const CreditCardContext = createContext<{
  creditCard: CreditCardInfo;
  setCreditCard:
    | (<T extends keyof CreditCardInfo>(target: T, newValue: CreditCardInfo[T]) => void)
    | null;
  initCreditCard: () => void;
}>({ creditCard: initialCreditCardInfo, setCreditCard: null, initCreditCard: () => {} });

export const CreditCardProvider = ({ children }: PropsWithChildren) => {
  const [creditCard, setCreditCard] = useState<CreditCardInfo>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    cardCompany: 'hyundai' as CardCompany,
    cardAlias: '',
  });

  const setCreditCardBy = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCard((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  const initCreditCard = () => {
    setCreditCard(initialCreditCardInfo);
  };

  return (
    <CreditCardContext.Provider
      value={{ creditCard, setCreditCard: setCreditCardBy, initCreditCard }}
    >
      {children}
    </CreditCardContext.Provider>
  );
};
