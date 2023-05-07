import { PropsWithChildren, createContext, useContext } from 'react';
import { CreditCard } from '../type/CreditCard';
import useArrayState from '../hook/useArrayState';

interface ContextValue {
  cardList: CreditCard[];
  addNewCard: (newCard: CreditCard) => void;
}

interface Props extends PropsWithChildren {
  value?: CreditCard[];
}

const CardListContext = createContext<ContextValue | null>(null);

export const CardListProvider = (props: Props) => {
  const { children, value } = props;
  const { array: cardList, push: addNewCard } = useArrayState<CreditCard>(value ?? []);

  return (
    <CardListContext.Provider value={{ cardList, addNewCard }}>
      {children}
    </CardListContext.Provider>
  );
}

export const useCardListContext = () => {
  const context = useContext(CardListContext);

  if (context === null) throw new Error('[ERROR] <CardListProvider>가 존재하지 않습니다!! 먼저 만들어 주세요.');

  return context;
}

export default CardListContext;