import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { noop } from '../../utils/noop';
import type { CardCompany } from '../types/card';

interface CardCompanyContextProps {
  cardCompany: CardCompany | null;
  setCardCompany: React.Dispatch<React.SetStateAction<CardCompany | null>>;
}

const CardCompanyContext = createContext<CardCompanyContextProps>({
  cardCompany: null,
  setCardCompany: noop,
});

export const CardCompanyProvider = ({ children }: PropsWithChildren) => {
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);

  const value = { cardCompany, setCardCompany };

  return (
    <CardCompanyContext.Provider value={value}>
      {children}
    </CardCompanyContext.Provider>
  );
};

export const useCardCompany = () => {
  const context = useContext(CardCompanyContext);

  if (context === undefined) {
    throw new Error('useCardCompany must be used within a CardCompanyProvider');
  }

  return context;
};
