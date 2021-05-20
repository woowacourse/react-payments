import { useState, createContext, useEffect } from 'react';
import { deepCopy, httpClient } from '../utils';
import { DB_ENDPOINT, HTTP_METHOD, MESSAGE } from '../constants';

const url = DB_ENDPOINT.CARDS;

export const CardListContext = createContext();

export const CardListContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const readCards = async () => {
    try {
      const body = await httpClient({ url, method: HTTP_METHOD.GET });

      setCardList(() => body);
    } catch (error) {
      window.alert(MESSAGE.CARD_READ_FAILED);
      console.error(error);
    }
  };

  useEffect(() => {
    readCards();
  }, []);

  const addCard = async (card) => {
    const newCard = deepCopy(card);

    try {
      const body = await httpClient({
        url,
        method: HTTP_METHOD.POST,
        body: JSON.stringify(newCard),
      });

      setCardList((prevList) => [...prevList, body]);
    } catch (error) {
      window.alert(MESSAGE.CARD_ADD_FAILED);
      console.error(error);
    }
  };

  const deleteCard = async (cardId) => {
    const filteredList = [...cardList].filter((v) => v.id !== cardId);

    try {
      await httpClient({ url: `${url}/${cardId}`, method: HTTP_METHOD.DELETE });

      setCardList(() => filteredList);
    } catch (error) {
      window.alert(MESSAGE.CARD_DELETE_FAILED);
      console.error(error);
    }
  };

  return (
    <CardListContext.Provider value={{ cardList, setCardList, addCard, deleteCard }}>
      {children}
    </CardListContext.Provider>
  );
};
