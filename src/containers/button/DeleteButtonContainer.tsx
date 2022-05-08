import React from 'react';
import axios from 'axios';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import Button from 'components/button/Button';

function DeleteButtonContainer({ id }: { id: string }) {
  const { cardList } = useAppState();
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = async (event: any) => {
    const cardId = event.target.id;
    if (window.confirm('등록된 카드를 삭제하시겠습니까?')) {
      await axios(`http://localhost:4004/cards/${cardId}`, {
        method: 'delete',
      });

      const setCardList = cardList.filter((card) => Number(card.id) !== Number(cardId));
      dispatch(createAction(ActionType.SET_CARD_LIST, setCardList));
    }
  };

  return <Button id={id} onClick={handleDeleteButtonClick} buttonType="remove" />;
}

export default DeleteButtonContainer;
