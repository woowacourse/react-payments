import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API } from '../constants';

export const CardListContext = createContext(null);

export const CardListProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const getCardList = async () => {
    try {
      const response = await fetch(API.BASE_URL);
      const data = await response.json();

      setCardList(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setCardList([]);
    }
  };

  useEffect(() => {
    getCardList();
  }, []);

  return <CardListContext.Provider value={cardList}>{children}</CardListContext.Provider>;
};

CardListProvider.propTypes = {
  children: PropTypes.node,
};

CardListProvider.defaultProps = {
  children: <></>,
};
