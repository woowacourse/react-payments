import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import Card from '../../common/Card';
import Modal from '../../common/Modal';
import NewCardForm from '../NewCardForm';
import useModal from '../../hooks/useModal';
import CardColor from '../ModalContents/CardColor';
import AddCardWrapper from './index.styles';

function AddCard({ newCardInfo, setCardInfo, handleCardColor }) {
  const { isModalOpen, setIsModalOpen, onClickModalDimmed } = useModal();

  return (
    <AddCardWrapper>
      <Nav />
      <AddCardWrapper>
        <Card
          cardInfo={newCardInfo}
          setIsModalOpen={setIsModalOpen}
          handleCardColor={handleCardColor}
        />
      </AddCardWrapper>
      <NewCardForm cardInfo={newCardInfo} setNewCardInfo={setCardInfo} />

      <Modal isModalOpen={isModalOpen} onClickModalDimmed={onClickModalDimmed}>
        <CardColor
          handleCardColor={handleCardColor}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </AddCardWrapper>
  );
}

AddCard.propTypes = {
  newCardInfo: PropTypes.shape({
    cardName: PropTypes.string,
    cardNickName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),

  setCardInfo: PropTypes.func,
  handleCardColor: PropTypes.func,
};

export default AddCard;
