import React, { useContext } from 'react';

import AddCardWrapper from './index.styles';
import Card from '../Card';
import CardColor from '../ModalContents/CardColor';
import { CardContext } from '../../context/CardContext';
import Modal from '../../common/Modal';
import Nav from '../Nav';
import NewCardForm from '../NewCardForm';
import useModal from '../../hooks/useModal';

function AddCard() {
  const { isModalOpen, setIsModalOpen, onClickModalDimmed } = useModal();
  const { cardInfo, changeCardName, setNewCardInfo } = useContext(CardContext);

  return (
    <AddCardWrapper>
      <Nav />
      <AddCardWrapper>
        <Card cardInfo={cardInfo} setIsModalOpen={setIsModalOpen} />
      </AddCardWrapper>
      <NewCardForm
        cardInfo={cardInfo}
        changeCardName={changeCardName}
        setNewCardInfo={setNewCardInfo}
      />

      <Modal isModalOpen={isModalOpen} onClickModalDimmed={onClickModalDimmed}>
        <CardColor setIsModalOpen={setIsModalOpen} />
      </Modal>
    </AddCardWrapper>
  );
}

export default AddCard;
