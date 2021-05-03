import React, { useState } from 'react';
import { Card, TextButton } from '../../components';
import { CARD, CARD_COMPANY, PATH } from '../../constants';
import './style.css';
import '../../index.css';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { CardsContext } from '../../cardsContext';

export default function AddCardComplete({ cards, currentCardId }) {
  const card = cards.find((card) => card.id === currentCardId);
  const { company, number, expirationDate, userName, nickname } = card;
  const [{ cardNickname }, onInputChange, reset] = useForm({ cardNickname: nickname });

  const dispatch = useContext(CardsContext);

  const history = useHistory();

  const onCardNickNameSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: 'EDIT_NICKNAME', id: currentCardId, nickname: cardNickname });
    history.push(PATH.ROOT);
  };

  return (
    <div className={'add-card-complete__container'}>
      <h1 className="add-card-complete__title">카드 등록이 완료되었습니다.</h1>
      <Card
        userName={userName}
        companyName={CARD_COMPANY[company].NAME}
        color={CARD_COMPANY[company].COLOR}
        number={number}
        expirationDate={expirationDate}
        size="large"
      />
      <form onSubmit={onCardNickNameSubmit}>
        <input
          id="card-nickname"
          name="cardNickname"
          className="add-card-complete__input"
          value={cardNickname}
          onChange={onInputChange}
          maxLength={CARD.NICKNAME_MAX_LENGTH}
        />
        <div className="bottom-right-button">
          <TextButton onClick={reset}>확인</TextButton>
        </div>
      </form>
    </div>
  );
}
