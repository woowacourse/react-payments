import React, { useContext, useState } from 'react';

import Nav from '../mixin/Nav';
import Card from '../../common/Card';
import NewCardForm from '../NewCardForm';
import { MODAL } from '../../constants/constant';
import { CardContext } from '../../data/context/CardContext';

const AddCard = () => {
  const { cardInfo } = useContext(CardContext);

  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: false,
    modalContent: '',
  });

  const onOpenModal = (modalContent) => {
    setOpenModalContent({
      isModalOpen: true,
      modalContent,
    });
  };

  const onCloseModal = () => {
    setOpenModalContent({
      isModalOpen: false,
      modalContent: '',
    });
  };

  return (
    <>
      <Nav>카드 추가</Nav>
      <div className='card-wrapper'>
        <Card
          cardInfo={cardInfo}
          onClickCard={() => onOpenModal(MODAL.CARD_COLOR)}
        />
      </div>
      <NewCardForm
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        openModalContent={openModalContent}
        setOpenModalContent={setOpenModalContent}
      />
    </>
  );
};

export default AddCard;
