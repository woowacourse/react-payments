import React, { useContext } from 'react';

import Nav from '../mixin/Nav';
import Card from '../../common/Card';
import NewCardForm from './NewCardForm';
import { MODAL } from '../../constants/constant';
import { CardContext } from '../../data/context/CardContext';
import { ModalContext } from '../../data/context/ModalContext';

const AddCard = () => {
  const { cardInfo } = useContext(CardContext);
  const { onOpenModal } = useContext(ModalContext);

  const onClickOpenCardColor = () => {
    onOpenModal(MODAL.CARD_COLOR);
  };

  return (
    <>
      <Nav>카드 추가</Nav>
      <div className='card-wrapper'>
        <Card cardInfo={cardInfo} onClickCard={onClickOpenCardColor} />
      </div>
      <NewCardForm />
    </>
  );
};

export default AddCard;
