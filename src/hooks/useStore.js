import { useEffect, useState } from 'react';
import store from '../store/store';

const useStore = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = (newCardInfo) => {
    store.save([...cardList, { ...newCardInfo, id: new Date().valueOf() }]);
    setCardList([...cardList, newCardInfo]);
  };

  useEffect(() => {
    setCardList(store.load() || []);
  }, []);

  return { cardList, addCard };
};

export default useStore;
