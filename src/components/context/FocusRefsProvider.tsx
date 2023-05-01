import React, { useRef } from 'react';
import { CardFocusRefContext, MoveFocusRefContext } from './CardPaymentContext';

type ChildProps = {
  children: React.ReactNode;
};

const FocusRefProvider: React.FC<ChildProps> = ({ children }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const moveFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.id);
    if (!e.target.validity.valid) return;
    inputRefs.current[id + 1].focus();
  };

  return (
    <CardFocusRefContext.Provider value={inputRefs}>
      <MoveFocusRefContext.Provider value={moveFocus}>{children}</MoveFocusRefContext.Provider>
    </CardFocusRefContext.Provider>
  );
};

export default FocusRefProvider;
