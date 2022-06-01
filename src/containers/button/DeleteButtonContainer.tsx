import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';

import { useAppDispatch, useAppState } from 'hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';

const DeleteButtonStyled = styled.button(
  css`
    border: none;
    background: inherit;
    cursor: pointer;
  `,
);

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

  return (
    <DeleteButtonStyled id={id} onClick={handleDeleteButtonClick}>
      삭제
    </DeleteButtonStyled>
  );
}

export default DeleteButtonContainer;
