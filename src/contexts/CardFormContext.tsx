import { ReactNode, createContext, useState } from 'react';

import type { CardInfo } from '../types/card';
import { CompanyName } from '../constants/company';

const initialCardInfo: CardInfo = {
  number: {
    first: '',
    second: '',
    third: '',
    fourth: ''
  },
  expiredDate: {
    month: '',
    year: '',
  },
  owner: '',
  cvc: '',
  password: {
    first: '',
    second: ''
  }
};

export interface InputAction {
  setFirstNumber: (number: string) => void;
  setSecondNumber: (number: string) => void;
  setThirdNumber: (number: string) => void;
  setFourthNumber: (number: string) => void;
  setExpiredMonth: (month: string) => void;
  setExpiredYear: (year: string) => void;
  setOwner: (owner: string) => void;
  setCvc: (cvc: string) => void;
  setFirstPassword: (password: string) => void;
  setSecondPassword: (password: string) => void;
}

interface CardFormAction {
  setCompany: (company: CompanyName) => void;
  inputAction: InputAction;
}

export const CardFormValueContext = createContext<CardInfo | null>(null);
export const CardFormActionContext = createContext<CardFormAction | null>(null);

interface Props {
  children: ReactNode;
}

const CardFormProvider = ({ children }: Props) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const setCompany = (company: CompanyName) => {
    setCardInfo((prev) => ({ ...prev, company }));
  };

  const inputAction: InputAction = {
    setFirstNumber: (number: string) => {
      setCardInfo((prev) => ({
        ...prev,
        number: { ...prev.number, first: number },
      }));
    },
    setSecondNumber: (number: string) => {
      setCardInfo((prev) => ({
        ...prev,
        number: { ...prev.number, second: number },
      }));
    },
    setThirdNumber: (number: string) => {
      setCardInfo((prev) => ({
        ...prev,
        number: { ...prev.number, third: number },
      }));
    },
    setFourthNumber: (number: string) => {
      setCardInfo((prev) => ({
        ...prev,
        number: { ...prev.number, fourth: number },
      }));
    },
    setExpiredMonth: (month: string) => {
      setCardInfo((prev) => ({
        ...prev,
        expiredDate: { ...prev.expiredDate, month },
      }));
    },
    setExpiredYear: (year: string) => {
      setCardInfo((prev) => ({
        ...prev,
        expiredDate: { ...prev.expiredDate, year },
      }));
    },
    setOwner: (owner: string) => {
      setCardInfo((prev) => ({
        ...prev,
        owner,
      }));
    },
    setCvc: (cvc: string) => {
      setCardInfo((prev) => ({
        ...prev,
        cvc,
      }));
    },
    setFirstPassword: (password: string) => {
      setCardInfo((prev) => ({
        ...prev,
        password: { ...prev.password, first: password },
      }));
    },
    setSecondPassword: (password: string) => {
      setCardInfo((prev) => ({
        ...prev,
        password: { ...prev.password, second: password },
      }));
    },
  };

  const action = { setCompany, inputAction };

  return (
    <CardFormActionContext.Provider value={action}>
      <CardFormValueContext.Provider value={cardInfo}>
        {children}
      </CardFormValueContext.Provider>
    </CardFormActionContext.Provider>
  );
};

export default CardFormProvider;
