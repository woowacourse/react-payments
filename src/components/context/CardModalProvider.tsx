import React from 'react';
import { useCardModal } from '../../hooks/useCardModal';
import { AddCardModalContext } from './CardPaymentContext';

type ChildProps = {
  children: React.ReactNode;
};

const CardModalProvider: React.FC<ChildProps> = ({ children }) => {
  const [isModal, toggleModal] = useCardModal(true);

  return (
    <AddCardModalContext.Provider value={{ isModal, toggleModal }}>
      {children}
    </AddCardModalContext.Provider>
  );
};

export default CardModalProvider;
