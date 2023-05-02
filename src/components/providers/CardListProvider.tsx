import { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Card } from '../../types/card';

interface Props {
  children: ReactNode;
}

interface CardListContextType {
  cardList: Card[];
  getCardById: (id: string) => Card;
  addNewCard: (newCard: Card) => void;
  setNickNameToCard: (cardId: string, nickName: string) => void;
  modifyCardInfo: (cardId: string, card: Card) => void;
}

export const CardListContext = createContext<CardListContextType>({
  cardList: [],
  getCardById: (id: string) => ({
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    companyId: undefined,
    nickName: undefined,
    cardId: '',
  }),
  addNewCard: (newCard: Card) => {},
  setNickNameToCard: (cardId: string, nickName: string) => {},
  modifyCardInfo: (cardId: string, card: Card) => {},
});

export const CardListProvider = ({ children }: Props) => {
  const {
    getCardListFromLocalStorage: getCardList,
    addCardListToLocalStorage: addNewCardToLocalStorage,
  } = useLocalStorage();
  const [cardList, setCardList] = useState(getCardList());

  const getCardById = (id: string) => {
    const card = cardList.find((card) => id === card.cardId);

    if (!card) throw new Error('일치하는 카드가 없습니다.');

    return card;
  };

  const addNewCard = (newCard: Card) => {
    setCardList((currentCardList) => {
      const newCardList = [newCard, ...currentCardList];

      addNewCardToLocalStorage(newCardList);

      return newCardList;
    });
  };

  const setNickNameToCard = (cardId: string, nickName: string) => {
    const cardIndex = cardList.findIndex((c) => c.cardId === cardId);

    setCardList((prev) => {
      const newCardList = prev.map((c, index) => {
        if (cardIndex === index) {
          return {
            ...c,
            nickName: nickName,
          };
        }
        return c;
      });

      addNewCardToLocalStorage(newCardList);

      return newCardList;
    });
  };

  const modifyCardInfo = (cardId: string, card: Card) => {
    setCardList((prev) => {
      const newCardList = prev.map((c) => {
        if (c.cardId === cardId) return card;
        return c;
      });

      addNewCardToLocalStorage(newCardList);

      return newCardList;
    });
  };

  return (
    <CardListContext.Provider
      value={{
        cardList,
        getCardById,
        addNewCard,
        setNickNameToCard,
        modifyCardInfo,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};
