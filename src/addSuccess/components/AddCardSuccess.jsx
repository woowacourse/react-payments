import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../addCard/components/Card';
import { MAX_LENGTH, MIN_LENGTH } from '../../constants';

function AddCardSuccess({ addCard }) {
  const [cardNick, setCardNick] = useState('');

  const card = useLocation().state;

  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    addCard({ ...card, nickName: cardNick });
    navigator('/');
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card completedCard={card} big />
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
            minLength={MIN_LENGTH.CARDNICK}
            maxLength={MAX_LENGTH.CARDNICK}
            required
            value={cardNick}
            onChange={(event) => setCardNick(event.target.value)}
          />
        </div>
        <div className="button-box mt-50">
          <button type="submit" className="button-text">
            확인
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCardSuccess;
