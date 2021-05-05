import { useState } from 'react';

const MODAL_TYPE = Object.freeze({
  VIRTUAL_KEYBOARD: 'virtual_keyboard',
  CARD_SELECTION: 'card_selection',
  IDLE: 'idle',
});

const useBottomModal = () => {
  const [modalType, setModalType] = useState(MODAL_TYPE.IDLE);
  const [isModalOpened, setModalOpen] = useState(false);

  const openModal = type => {
    if (!Object.values(MODAL_TYPE).includes(type)) return;

    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = type => {
    if (!Object.values(MODAL_TYPE).includes(type)) return;

    setModalType(MODAL_TYPE.IDLE);
    setModalOpen(false);
  };

  return { modalType, isModalOpened, openModal, closeModal };
};

export { MODAL_TYPE, useBottomModal };
