import { useEffect, useState } from 'react';
import store from '../store/store';
import { removeCrucialCardInfo } from '../utils/commons';

const useStore = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = (newCardInfo) => {
    store.save([...cardList, { ...newCardInfo, id: new Date().valueOf() }]);
    setCardList([...cardList, removeCrucialCardInfo(newCardInfo)]);
  };

  useEffect(() => {
    const savedCardList = store.load() || [];
    const safeCardInfoList = savedCardList.map((card) =>
      removeCrucialCardInfo(card)
    );

    setCardList(safeCardInfoList);
  }, []);

  return { cardList, addCard };
};

export default useStore;
