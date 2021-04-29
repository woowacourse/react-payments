import { useEffect, useRef, useState } from 'react';
import { BottomModal as BottomModalComponent } from '../components/commons/modal/BottomModal';

const MODAL_TYPE = Object.freeze({
  VIRTUAL_KEYBOARD: 'virtual_keyboard',
  CARD_SELECTION: 'card_selection',
  DEFAULT: 'default',
});

const useBottomModal = () => {
  const [modalType, setModalType] = useState(MODAL_TYPE.DEFAULT);
  const [isModalOpened, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    isModalOpened && modalRef.current?.scrollIntoView();
  }, [isModalOpened, modalType]);

  const openModal = type => {
    if (!Object.values(MODAL_TYPE).includes(type)) return;

    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = type => {
    if (!Object.values(MODAL_TYPE).includes(type)) return;

    setModalType(type);
    setModalOpen(false);
  };

  const BottomModal = ({ ...props }) => {
    return (
      isModalOpened && <BottomModalComponent closeModal={closeModal.bind(null, modalType)} ref={modalRef} {...props} />
    );
  };

  return { modalType, isModalOpened, openModal, closeModal, BottomModal };
};

export { MODAL_TYPE, useBottomModal };
