import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';
import { CardListWrapper } from './index.styles';
import { db } from '../../data/firebase';
import { CardListContext } from '../../data/context/CardListContext';
import { useContext } from 'react';
import { PageContext } from '../../data/context/PageContext';

const CardList = ({ setNewCardInfo }) => {
  const { cards } = useContext(CardListContext);
  const { setPage } = useContext(PageContext);

  const onClickChangeName = (card) => {
    setNewCardInfo(card);
    setPage(PAGE.CARD_COMPLETE);
  };

  const onClickDeleteCard = (id) => {
    db.collection('cards')
      .doc(id)
      .delete()
      .then(() => {
        alert('카드가 성공적으로 제거되었습니다.');
      })
      .catch(() => {
        alert(
          '카드를 제거하는데 실패했습니다. 해당 오류가 지속되면 관리자에게 문의해주시기 바랍니다.'
        );
      });
  };

  return (
    <>
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
