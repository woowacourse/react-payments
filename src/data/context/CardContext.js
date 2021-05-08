import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CardContext = React.createContext();

export const CardProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState({
    cardName: '',
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
  });

  return (
    <CardContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node,
};
