import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Card from '../../common/Card';
import NewCardForm from '../../components/NewCardForm';
import AddCardWrapper from './index.styles';

function AddCard({ newCardInfo, handleModalOpen, setNewCardInfo, setPage }) {
  return (
    <AddCardWrapper>
      <Nav />
      <div className='card-wrapper'>
        <Card cardInfo={newCardInfo} handleModalOpen={handleModalOpen} />
      </div>
      <NewCardForm
        cardInfo={newCardInfo}
        setNewCardInfo={setNewCardInfo}
        handleModalOpen={handleModalOpen}
        setPage={setPage}
      />
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
  handleModalOpen: PropTypes.func,
  setNewCardInfo: PropTypes.func,
  setPage: PropTypes.func,
};

export default AddCard;
