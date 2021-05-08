import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import { PAGE } from '../../constants/constant';
import { CardListWrapper } from './index.styles';
import { db } from '../../data/firebase';

const CardList = ({ myCards, setMyCards, setPage, setNewCardInfo }) => {
  const [loading, setLoading] = useState(true);
  const getMyCards = async () => {
    const dbCards = await db
      .collection('cards')
      .orderBy('modifiedDate', 'desc')
      .get()
      .then((querySnapshot) => {
        const dbCards = {};
        querySnapshot.forEach((doc) => (dbCards[doc.id] = doc.data()));
        return dbCards;
      })
      .catch(() => {
        alert(
          '카드 목록을 불러오는데 실패했습니다. 해당 오류가 지속되면 관리자에게 문의해주시기 바랍니다.'
        );
      });
    setMyCards(dbCards);
    setLoading(false);
  };
  const onClickChangeName = (card) => {
    setNewCardInfo(card);
    setPage(PAGE.CARD_COMPLETE);
  };

  const onClickDeleteCard = (id) => {
    setLoading(true);
    db.collection('cards')
      .doc(id)
      .delete()
      .then(() => {
        alert('카드가 성공적으로 제거되었습니다.');
        setLoading(false);
      })
      .catch(() => {
        alert(
          '카드를 제거하는데 실패했습니다. 해당 오류가 지속되면 관리자에게 문의해주시기 바랍니다.'
        );
      });
  };

  useEffect(() => {
    getMyCards();
  }, []);
  return (
    <>
      {loading ? (
        <div>카드 목록을 불러오는 중입니다</div>
      ) : (
        <CardListWrapper>
          {Object.entries(myCards).map(([key, card]) => (
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
      )}
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
