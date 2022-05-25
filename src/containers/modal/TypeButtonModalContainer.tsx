import React from 'react';
import Modal from 'components/modal/Modal';
import { createAction } from 'context/Provider';
import { useAppDispatch } from 'hooks/hooks';
import { ActionType } from 'types';
import TypeButtonContainer from './TypeButtonContainer';
import ModalPortal from 'portal';

function TypeButtonModal() {
  const dispatch = useAppDispatch();

  const handleTypeModalClick = () => {
    dispatch(createAction(ActionType.CHANGE_CARD_TYPE, false));
  };
  return (
    <ModalPortal>
      <Modal typeButtonClick={handleTypeModalClick}>
        <TypeButtonContainer />
      </Modal>
    </ModalPortal>
  );
}

export default TypeButtonModal;
