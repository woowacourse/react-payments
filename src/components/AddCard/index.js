import React, { useContext } from 'react';
import Nav from '../Nav';
import Card from '../../common/Card';
import Modal from '../../common/Modal';
import NewCardForm from '../NewCardForm';
import useModal from '../../hooks/useModal';
import CardColor from '../ModalContents/CardColor';
import AddCardWrapper from './index.styles';
import { CardContext } from '../../context/CardContext';

function AddCard() {
  const { isModalOpen, setIsModalOpen, onClickModalDimmed } = useModal();
  const { cardInfo, setCardInfo } = useContext(CardContext);

  return (
    <AddCardWrapper>
      <Nav />
      <AddCardWrapper>
        <Card cardInfo={cardInfo} setIsModalOpen={setIsModalOpen} />
      </AddCardWrapper>
      <NewCardForm cardInfo={cardInfo} setCardInfo={setCardInfo} />

      <Modal isModalOpen={isModalOpen} onClickModalDimmed={onClickModalDimmed}>
        <CardColor setIsModalOpen={setIsModalOpen} />
      </Modal>
    </AddCardWrapper>
  );
}

export default AddCard;
