import { PropsWithChildren, createContext, useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';
import { CardCompany } from '../@types/cardCompany';

export const CreditCardContext = createContext<
  [
    CreditCardInfo,
    (<T extends keyof CreditCardInfo>(target: T, newValue: CreditCardInfo[T]) => void) | null
  ]
>([
  {
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    cardCompany: 'hyundai' as CardCompany,
    cardAlias: '',
  },
  null,
]);

export const CreditCardProvider = ({ children }: PropsWithChildren) => {
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    cardCompany: 'hyundai' as CardCompany,
    cardAlias: '',
  });

  const setCreditCard = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCardInfo((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  return (
    <CreditCardContext.Provider value={[creditCardInfo, setCreditCard]}>
      {children}
    </CreditCardContext.Provider>
  );
};
