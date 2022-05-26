import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../addCard/components/Card';
import { MAX_LENGTH, MIN_LENGTH } from '../../constants';
import Input from '../../addCard/components/Input';
import { checkMaxLength, validator } from '../../validator';

function AddCardSuccess({ card, addCard }) {
  const [cardNick, setCardNick] = useState('');

  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    addCard({ ...card, nickName: cardNick });
    navigator('/', { replace: true });
  };

  const updateCardNick = (value) => {
    setCardNick(value);
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card big />
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="input-container flex-center w-100">
          <Input
            shape="input-underline w-75"
            placeholder="카드의 별칭을 입력해주세요."
            length={MAX_LENGTH.CARDNICK}
            minLength={MIN_LENGTH.CARDNICK}
            value={cardNick}
            required
            validators={[validator(checkMaxLength, MAX_LENGTH.CARDNICK)]}
            onChange={updateCardNick}
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
