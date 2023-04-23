import { createContext } from 'react';
import type { CardInformation } from './components/Common/Card/types';

interface Store {
  cardList: CardInformation[];
  dispatchCardList: (card: CardInformation) => void;
}

const CardListStore = createContext<Store | null>(null);

export default CardListStore;
