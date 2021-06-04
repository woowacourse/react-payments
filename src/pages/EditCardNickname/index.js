import React from 'react';
import { useHistory, useParams } from 'react-router';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { CardsContext } from '../../cardsContext';
import { Card, TextButton } from '../../components';
import { CARD, CARD_COMPANY, PATH } from '../../constants';
import './style.css';

export default function EditCardNickname({ cards }) {
  const history = useHistory();
  const { id, state } = useParams();
  const dispatch = useContext(CardsContext);

  const currentCardId = Number(id);

  const card = cards.find((card) => card.id === currentCardId);
  const { company, number, expirationDate, userName, nickname } = card;
  const [{ cardNickname }, onInputChange] = useForm({ cardNickname: nickname });

  const onCardNickNameSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: 'EDIT_NICKNAME', id: currentCardId, nickname: cardNickname });
    history.push(PATH.ROOT);
  };

  return (
    <div
      className={
        'contents add-card-complete__container d-flex flex-col items-center justify-content-center '
      }
    >
      <h1 className="text-xl font-weight-400 mb-20 mt-10">
        {state === 'new' && '카드 등록이 완료되었습니다.'}
      </h1>
      <Card
        userName={userName}
        companyName={CARD_COMPANY[company].NAME}
        color={CARD_COMPANY[company].COLOR}
        number={number}
        expirationDate={expirationDate}
        size="large"
      />
      <form onSubmit={onCardNickNameSubmit} className="mt-5">
        <input
          name="cardNickname"
          className="add-card-complete__input font-weight-400 font-color-gray-700 text-center text-l pt-3 bg-transparent"
          value={cardNickname}
          onChange={onInputChange}
          maxLength={CARD.NICKNAME_MAX_LENGTH}
          aria-label="카드 별칭 입력"
        />
        <div className="bottom-right-button">
          <TextButton>확인</TextButton>
        </div>
      </form>
    </div>
  );
}
