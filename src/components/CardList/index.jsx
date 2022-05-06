import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardContext from '../../context';
import Card from '../Card';
import { uid } from 'react-uid';
import { DISPATCH_TYPE, DEFAULT_CARD_INFO } from '../../constants';

function CardList({ handleChangePage }) {
  const { cardList, cardInputDispatch } = useContext(CardContext);
  Object.keys(cardList).map(keys => console.log(cardList[keys]));

  const handleAddCard = () => {
    cardInputDispatch({
      type: DISPATCH_TYPE.RESET,
      payload: { ...DEFAULT_CARD_INFO },
    });
    handleChangePage('addCardPage');
  };

  return (
    <main className="card-list-box">
      {Object.keys(cardList).map(keys => (
        <>
          <Card key={uid(keys)} cardInformation={cardList[keys]} cardBoxSize={'small'} />
          <p className="card-bottom__number">{cardList[keys].cardDesignation}</p>
        </>
      ))}
      <button className="card-button-box" onClick={handleAddCard}>
        <div className="empty-card">
          <p className="card-add">+</p>
        </div>
      </button>
    </main>
  );
}

CardList.propTypes = {
  handleChangePage: PropTypes.func,
};

export default CardList;
