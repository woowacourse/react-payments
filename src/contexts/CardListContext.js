import { useState, createContext, useEffect } from 'react';
import { deepCopy, httpClient, idGenerator } from '../utils';
import { DB_ENDPOINT, HTTP_METHOD } from '../constants';

const url = DB_ENDPOINT.CARDS;

export const CardListContext = createContext();

export const CardListContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const readCards = async () => {
    try {
      const body = await httpClient({ url, method: HTTP_METHOD.GET });
      setCardList(body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    readCards();
  }, []);

  const addCard = async (card) => {
    try {
      const body = await httpClient({
        url,
        method: HTTP_METHOD.POST,
        body: JSON.stringify({ id: idGenerator(), ...deepCopy(card) }),
      });

      setCardList((prevList) => [...prevList, body]);
    } catch (error) {
      console.error(error);
    }
  };

  const resetCardList = () => setCardList(() => []);

  return (
    <CardListContext.Provider value={{ cardList, setCardList, addCard, resetCardList }}>
      {children}
    </CardListContext.Provider>
  );
};
