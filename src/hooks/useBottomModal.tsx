import React, { PropsWithChildren, useCallback, useState } from 'react';
import BottomModal from '../components/@common/BottomModal';

const useBottomModal = (isShow: boolean) => {
  const [isOpen, setIsOpen] = useState(isShow);

  const openModal = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    BottomModal: ({ children }: PropsWithChildren) => (
      <BottomModal isOpen={isOpen} onClose={closeModal}>
        {children}
      </BottomModal>
    ),
    openModal,
    closeModal,
  };
};

export default useBottomModal;
