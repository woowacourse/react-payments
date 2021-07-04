import React, { createContext } from 'react';

import { usePayments } from '../hooks/usePayment';

export const PaymentsContext = createContext();

export const PaymentsContextProvider = ({ children }) => {
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
