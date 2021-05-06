import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';
import { CardListWrapper } from './index.styles';

const CardList = ({ myCards, setPage, setNewCardInfo }) => {
  const onClickChangeName = (card) => {
    setNewCardInfo(card);
    setPage(PAGE.CARD_COMPLETE);
  };
  return (
    <>
      <CardListWrapper>
        {myCards.map((card, index) => (
          <div key={index} className='card'>
            <Card cardInfo={card} />
            <div className='card-cover'>
              <div className='card-menus'>
                <div
                  className='card-menu change-name'
                  onClick={() => onClickChangeName(card)}
                >
                  별칭 변경
                </div>
                <div className='card-menu delete-card'>카드 삭제</div>
              </div>
            </div>

            <div className='card-nickname'>{card.cardNickName}</div>
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
  setNewCardInfo: PropTypes.func,
};
export default CardList;
