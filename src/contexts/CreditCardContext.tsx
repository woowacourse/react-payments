import { PropsWithChildren, createContext } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';
import { CardCompanyEng } from '../@types/cardCompany';
import useCreditCard from '../hooks/useCreditCard';
import CreditCardContextType from '../@types/creditCardContextType';

const initialCreditCardInfo: CreditCardInfo = {
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  ownerName: '',
  securityCode: '',
  password: ['', ''],
  cardCompany: 'hyundai' as CardCompanyEng,
  cardAlias: '',
};

export const CreditCardContext = createContext<CreditCardContextType | null>(null);

export const CreditCardProvider = ({ children }: PropsWithChildren) => {
  const { creditCard, setCreditCard, initCreditCard } = useCreditCard(initialCreditCardInfo);

  return (
    <CreditCardContext.Provider value={{ creditCard, setCreditCard, initCreditCard }}>
      {children}
    </CreditCardContext.Provider>
  );
};
