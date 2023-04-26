import React, { useReducer } from 'react';

import reducer from '../../store/reducer';
import initialState from '../../store/initialState';
import { CardPaymentDispatchContext, CardPaymentStateContext } from '../../hooks/useContextHooks';

type ChildProps = {
  children: React.ReactNode;
};

const PaymentProvider: React.FC<ChildProps> = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return (
    <CardPaymentStateContext.Provider value={state}>
      <CardPaymentDispatchContext.Provider value={dispatcher}>
        {children}
      </CardPaymentDispatchContext.Provider>
    </CardPaymentStateContext.Provider>
  );
};

export default PaymentProvider;
