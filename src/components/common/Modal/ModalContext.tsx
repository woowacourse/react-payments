import { PropsWithChildren, createContext, useContext } from 'react';

import useAnimatedModal from './hooks/useAnimatedModal';

import { noop } from '../../../utils/noop';

interface ModalContextProps {
  isModalOpen: boolean;
  isVisible: boolean;
  isAnimating: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  isVisible: false,
  isAnimating: false,
  openModal: noop,
  closeModal: noop,
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isModalOpen, isVisible, isAnimating, openModal, closeModal } =
    useAnimatedModal();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, isVisible, isAnimating, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
