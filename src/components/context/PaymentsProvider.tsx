import React, { useReducer } from 'react';

import reducer from '../../store/reducer';
import cardFormState from '../../store/cardFormStore';
import { CardPaymentDispatchContext, CardPaymentStateContext } from './CardPaymentContext';

type ChildProps = {
  children: React.ReactNode;
};

const PaymentFormProvider: React.FC<ChildProps> = ({ children }) => {
  const [formState, formDispatcher] = useReducer(reducer, cardFormState);

  return (
    <CardPaymentStateContext.Provider value={formState}>
      <CardPaymentDispatchContext.Provider value={formDispatcher}>
        {children}
      </CardPaymentDispatchContext.Provider>
    </CardPaymentStateContext.Provider>
  );
};

export default PaymentFormProvider;
