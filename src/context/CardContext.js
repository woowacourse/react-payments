import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const CardContext = createContext(null);

export const defaultCardInfo = {
  cardName: 'DEFAULT',
  cardNickName: '',
  numbers: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  user: '',
  expireDate: {
    month: '',
    year: '',
  },
  cvc: '',
  password: {
    first: '',
    second: '',
  },
};

export const CardContextProvider = ({ children }) => {
  const [addCardInfo, setAddCardInfo] = useState([]);
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);

  console.log(addCardInfo);
  console.log(cardInfo);

  const addNewCard = () => {
    setAddCardInfo([...addCardInfo, cardInfo]);
    resetNewCardInfo();
  };

  const handleCardColor = (name) => {
    setCardInfo({ ...cardInfo, cardName: name });
  };

  const resetNewCardInfo = () => setCardInfo(defaultCardInfo);

  return (
    <CardContext.Provider
      value={{
        cardInfo,
        setCardInfo,
        handleCardColor,
        addNewCard,
        resetNewCardInfo,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

CardContextProvider.propTypes = {
  children: PropTypes.ReactNode,
};
