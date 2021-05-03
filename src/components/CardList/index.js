import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';

const CardList = ({ myCards, setPage }) => {
  return (
    <div>
      {console.log(myCards)}
      {myCards.map((card) => {
        <Card cardInfo={card} />;
      })}
      <Card addCard onClickCard={() => setPage(PAGE.ADD_CARD)} />
    </div>
  );
};

CardList.propTypes = {
  myCards: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func,
};
export default CardList;
