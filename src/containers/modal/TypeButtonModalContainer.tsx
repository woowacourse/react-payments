import React from 'react';
import Modal from 'components/modal/Modal';
import { createAction } from 'context/Provider';
import { useAppDispatch } from 'hooks/hooks';
import { ActionType } from 'types';
import TypeButtonContainer from './TypeButtonContainer';

function TypeButtonModal() {
  const dispatch = useAppDispatch();

  const handleTypeModalClick = () => {
    dispatch(createAction(ActionType.CHANGE_CARD_TYPE, false));
  };
  return (
    <>
      <Modal typeButtonClick={handleTypeModalClick}>
        <TypeButtonContainer />
      </Modal>
    </>
  );
}

export default TypeButtonModal;
