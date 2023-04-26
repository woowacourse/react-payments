import { CardType } from '../types';
import { createContext, useContext, useReducer } from 'react';

interface CardForm extends Omit<CardType, 'id'> {}

type CardFormAction =
  | {
      type: 'SET_VALUE';
      key: keyof CardForm;
      value: string;
    }
  | {
      type: 'SET_LIST_VALUE';
      key: keyof CardForm;
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
      const newList = cardForm[action.key].slice() as string[];
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
  if (context === null) throw new Error('context is null');
  return context;
};

interface CardFormProviderProps {
  children: React.ReactNode;
}

export const CardFormProvider = ({ children }: CardFormProviderProps) => {
  const [cardForm, dispatch] = useReducer(cardFormReducer, initialCardForm);
  return (
    <CardFormContext.Provider value={[cardForm, dispatch] as const}>{children}</CardFormContext.Provider>
  );
};
