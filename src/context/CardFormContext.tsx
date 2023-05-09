import type { CardType } from '../types';
import { createContext, useContext, useReducer } from 'react';

interface CardForm extends Omit<CardType, 'id'> {}

type CardFormAction =
  | {
      type: 'SET_VALUE';
      key: keyof Omit<CardForm, 'cardNumber' | 'cardPassword' | 'expireDate'>;
      value: string;
    }
  | {
      type: 'SET_LIST_VALUE';
      key: keyof Pick<CardForm, 'cardNumber' | 'cardPassword' | 'expireDate'>;
      index: number;
      value: string;
    }
  | {
      type: 'INIT';
    };

const initialCardForm: CardForm = {
  cardCompany: '',
  cardNumber: ['', '', '', ''],
  expireDate: ['', ''],
  ownerName: '',
  securityCode: '',
  cardPassword: ['', ''],
  cardName: '',
};

const cardFormReducer = (cardForm: CardForm, action: CardFormAction) => {
  switch (action.type) {
    case 'SET_VALUE': {
      return { ...cardForm, [action.key]: action.value };
    }
    case 'SET_LIST_VALUE': {
      const newList = cardForm[action.key].slice();
      newList[action.index] = action.value;
      return { ...cardForm, [action.key]: newList };
    }
    case 'INIT': {
      return initialCardForm;
    }
  }
};

const CardFormContext = createContext<readonly [CardForm, React.Dispatch<CardFormAction>] | null>(null);

export const useCardForm = (): readonly [CardForm, React.Dispatch<CardFormAction>] => {
  const context = useContext(CardFormContext);
  if (context === null) throw new Error('CardForm context is null');

  return context;
};

export const CardFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardForm, dispatch] = useReducer(cardFormReducer, initialCardForm);

  return (
    <CardFormContext.Provider value={[cardForm, dispatch] as const}>{children}</CardFormContext.Provider>
  );
};
