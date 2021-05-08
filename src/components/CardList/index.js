import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';
import { CardListWrapper } from './index.styles';

import { CardListContext } from '../../data/context/CardListContext';
import { useContext } from 'react';
import { PageContext } from '../../data/context/PageContext';
import { CardContext } from '../../data/context/CardContext';
import Nav from '../mixin/Nav';

const CardList = () => {
  const { cards, deleteCard } = useContext(CardListContext);
  const { setPage } = useContext(PageContext);
  const { setCardInfo } = useContext(CardContext);

  const onClickChangeName = (card) => {
    setCardInfo(card);
    setPage(PAGE.CARD_COMPLETE);
  };

  const onClickDeleteCard = (id) => {
    deleteCard(id);
  };

  return (
    <>
      <Nav>보유 카드</Nav>
      <CardListWrapper>
        {Object.entries(cards).map(([key, card]) => (
          <div key={key} className='card'>
            <Card cardInfo={card} />
            <div className='card-cover'>
              <div className='card-menus'>
                <div
                  className='card-menu change-name'
                  onClick={() => onClickChangeName(card)}
                >
                  별칭 변경
                </div>
                <div
                  className='card-menu delete-card'
                  onClick={() => onClickDeleteCard(key)}
                >
                  카드 삭제
                </div>
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
  setMyCards: PropTypes.func,
  setPage: PropTypes.func,
  setNewCardInfo: PropTypes.func,
};
export default CardList;
