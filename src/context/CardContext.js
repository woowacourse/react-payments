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

  const addNewCard = () => {
    setAddCardInfo([...addCardInfo, cardInfo]);
    resetNewCardInfo();
  };

  const changeCardNickName = ({ target }) => {
    setCardInfo({ ...cardInfo, cardNickName: target.value });
  };

  const changeCardName = (name, value) => {
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const setNewCardInfo = (name, detail, value) => {
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: { ...prevInfo[name], [detail]: value },
    }));
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
        setNewCardInfo,
        changeCardName,
        changeCardNickName,
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
