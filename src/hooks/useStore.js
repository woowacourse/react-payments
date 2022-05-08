import { useEffect, useState, useMemo } from 'react';
import store from '../store/store';
import { removeCrucialCardInfo } from '../utils/commons';

const useStore = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const savedCardList = store.load() || [];
    const safeCardInfoList = savedCardList.map((card) =>
      removeCrucialCardInfo(card)
    );

    setCardList(safeCardInfoList);
  }, []);

  const cardsApi = useMemo(
    () => ({
      cardList,
      addCard: (cardInfo) => {
        const newCard = { ...cardInfo, id: new Date().valueOf() };
        const safeCardInfo = removeCrucialCardInfo(newCard);

        store.save([...cardList, newCard]);
        setCardList((prevCardList) => [...prevCardList, safeCardInfo]);

        return safeCardInfo;
      },
      updateCard: (id, updatedCardInfo) => {
        setCardList((prevCardList) => {
          const updatedCardList = [...prevCardList];
          const index = prevCardList.findIndex((card) => card.id === id);

          if (index) {
            updatedCardList[index] = {
              ...prevCardList[index],
              ...updatedCardInfo,
            };
          }

          return updatedCardList;
        });
      },
    }),
    [cardList]
  );

  return cardsApi;
};

export default useStore;
