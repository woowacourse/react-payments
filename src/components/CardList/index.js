import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';
import { CardListWrapper } from './index.styles';

const CardList = ({ myCards, setPage }) => {
  return (
    <>
      <CardListWrapper>
        {myCards.map((card, index) => (
          <div key={index} className='card'>
            <Card cardInfo={card} />
          </div>
        ))}
        <div className='card add-card'>
          <Card addCard onClickCard={() => setPage(PAGE.ADD_CARD)} />
        </div>
      </CardListWrapper>
    </>
  );
};

CardList.propTypes = {
  myCards: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func,
};
export default CardList;
