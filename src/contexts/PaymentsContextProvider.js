import PropTypes from 'prop-types';
import React, { createContext } from 'react';

import { usePayments } from '../hooks/usePayment';

export const PaymentsContext = createContext();

export const PaymentsContextProvider = (props) => {
  const { children } = props;
  const { cardNumbers, cardCompany, expiration, ownerName, securityCode, password, cardName } = usePayments();

  return (
    <PaymentsContext.Provider
      value={{
        cardNumbers,
        cardCompany,
        expiration,
        ownerName,
        securityCode,
        password,
        cardName,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  );
};

PaymentsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
