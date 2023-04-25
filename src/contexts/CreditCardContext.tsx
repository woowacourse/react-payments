import { PropsWithChildren, createContext, useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';
import { Banks } from '../@types/banks';

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
    bank: 'hyundai' as Banks,
  },
  null,
]);

export const CreditCardProvider = ({ children }: PropsWithChildren) => {
  const [creditCardEntered, setCreditCardEntered] = useState<CreditCardInfo>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    bank: 'hyundai' as Banks,
  });
  console.log('>>> creditCardEntered:', creditCardEntered);

  const setCreditCard = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCardEntered((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  return (
    <CreditCardContext.Provider value={[creditCardEntered, setCreditCard]}>
      {children}
    </CreditCardContext.Provider>
  );
};
