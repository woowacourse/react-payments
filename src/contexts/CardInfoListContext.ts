import { createContext } from 'react';
import { CardInfo, SetCardInfoList } from '../types/state';

const CardInfoListContext = createContext<{
  cardInfoList: CardInfo[];
  setCardInfoList: SetCardInfoList;
}>({
  cardInfoList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardInfoList: () => {},
});

export default CardInfoListContext;
