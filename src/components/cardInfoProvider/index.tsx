import { ReactNode, createContext, useMemo, useState } from 'react';
import { Card } from '../../types/card';
import { COMPANIES } from '../../constants/cardCompany';

interface CardInfoAction {
  setCardNumber(index: number, userInput: string): void;
  setExpirationDate(target: 'month' | 'year', userInput: string): void;
  setOwnerName(userInput: string): void;
  setSecurityCode(userInput: string): void;
  setPassword(index: number, userInput: string): void;
  setCompanyId(selectedCompanyId: keyof typeof COMPANIES): void;
  setNickName(userInput: string): void;
  resetAll(): void;
}

interface Props {
  children: ReactNode;
}

export const CardInfoActionsContext = createContext<CardInfoAction>({
  setCardNumber: () => {},
  setExpirationDate: () => {},
  setOwnerName: () => {},
  setSecurityCode: () => {},
  setPassword: () => {},
  setCompanyId: () => {},
  setNickName: () => {},
  resetAll: () => {},
});

export const CardInfoValuesContext = createContext<Card>({
  cardNumber: ['', '', '', ''],
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: ['', ''],
  companyId: undefined,
  nickName: undefined,
});

export const CardInfoProvider = ({ children }: Props) => {
  const [cardInfo, setCardInfo] = useState<Card>({
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    companyId: undefined,
    nickName: undefined,
  });

  const actions = useMemo(
    () => ({
      setCardNumber(index: number, userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          cardNumber: prev.cardNumber.map((n, i) => {
            if (i === index) return userInput.slice(0, 4);
            return n;
          }),
        }));
      },
      setExpirationDate(target: 'month' | 'year', userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          expirationDate: (() => {
            const newExpirationDate = { ...prev.expirationDate };

            newExpirationDate[target] = userInput.slice(0, 2);

            return newExpirationDate;
          })(),
        }));
      },
      setOwnerName(userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          ownerName: userInput.slice(0, 20),
        }));
      },
      setSecurityCode(userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          securityCode: userInput.slice(0, 3),
        }));
      },
      setPassword(index: number, userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          password: prev.password.map((pw, i) => {
            if (index === i) return userInput.slice(0, 1);
            return pw;
          }),
        }));
      },
      setCompanyId(selectedCompanyId: keyof typeof COMPANIES) {
        setCardInfo((prev) => ({
          ...prev,
          companyId: selectedCompanyId,
        }));
      },
      setNickName(userInput: string) {
        setCardInfo((prev) => ({
          ...prev,
          nickName: userInput,
        }));
      },
      resetAll() {
        setCardInfo({
          cardNumber: ['', '', '', ''],
          expirationDate: { month: '', year: '' },
          ownerName: '',
          securityCode: '',
          password: ['', ''],
          companyId: undefined,
          nickName: undefined,
        });
      },
    }),
    []
  );

  return (
    <CardInfoActionsContext.Provider value={actions}>
      <CardInfoValuesContext.Provider value={cardInfo}>
        {children}
      </CardInfoValuesContext.Provider>
    </CardInfoActionsContext.Provider>
  );
};
