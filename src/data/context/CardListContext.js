import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';

export const CardListContext = React.createContext();

export const CardListProvider = ({ children }) => {
  const [cards, setCards] = useState({});

  const getMyCards = async () => {
    await db
      .collection('cards')
      .orderBy('modifiedDate', 'desc')
      .onSnapshot(
        (querySnapshot) => {
          const dbCards = {};
          querySnapshot.forEach((doc) => (dbCards[doc.id] = doc.data()));
          setCards(dbCards);
        },
        () => {
          alert(
            '카드 목록을 불러오는데 실패했습니다. 해당 오류가 지속되면 관리자에게 문의해주시기 바랍니다.'
          );
        }
      );
  };

  const addNewCard = (cardInfo) => {
    db.collection('cards')
      .add(Object.assign(cardInfo, { modifiedDate: Date.now() }))

      .catch(() => {
        alert(
          '카드를 추가하는데 실패했습니다. 해당 오류가 지속되면 관리자에게 문의해주시기 바랍니다.'
        );
      });
  };

  const deleteCard = (id) => {
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

  useEffect(() => {
    getMyCards();
  }, []);

  return (
    <CardListContext.Provider value={{ cards, addNewCard, deleteCard }}>
      {children}
    </CardListContext.Provider>
  );
};

CardListProvider.propTypes = {
  children: PropTypes.node,
};
