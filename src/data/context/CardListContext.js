import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../constants/constant';

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
          alert(ERROR_MESSAGE.LOAD_CARD_LIST);
        }
      );
  };

  const addNewCard = (cardInfo) => {
    db.collection('cards')
      .add(Object.assign(cardInfo, { modifiedDate: Date.now() }))
      .then(() => {
        alert(SUCCESS_MESSAGE.NEW_CARD_REGISTER);
      })
      .catch(() => {
        alert(ERROR_MESSAGE.ADD_CARD);
      });
  };

  const modifyCardNickName = (id, nickname) => {
    db.collection('cards')
      .doc(id)
      .update({
        cardNickName: nickname,
      })
      .then(() => {
        alert(SUCCESS_MESSAGE.MODIFY_NICK_NAME);
      })
      .catch(() => {
        alert(ERROR_MESSAGE.MODIFY_NICK_NAME);
      });
  };

  const deleteCard = (id) => {
    db.collection('cards')
      .doc(id)
      .delete()
      .then(() => {
        alert(SUCCESS_MESSAGE.REMOVE_CARD);
      })
      .catch(() => {
        alert(ERROR_MESSAGE.REMOVE_CARD);
      });
  };

  useEffect(() => {
    getMyCards();
  }, []);

  return (
    <CardListContext.Provider
      value={{ cards, addNewCard, deleteCard, modifyCardNickName }}
    >
      {children}
    </CardListContext.Provider>
  );
};

CardListProvider.propTypes = {
  children: PropTypes.node,
};
