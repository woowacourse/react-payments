import React, { ChangeEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { CardNumber, CardType, InputHook } from '../type';
import { LOCATION } from '../utils/constants';
import { fetchNewCardData } from '../utils/fetchData';
import Card from './Card';
import './CardNicknameInputModal.css';

type CardNicknameInputModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  cardType: string;
  cardNumber: InputHook<CardNumber>;
  cardExpire: InputHook<string>;
  cardOwner: InputHook<string>;
  securityCode: InputHook<string>;
  cardPassword1: InputHook<string>;
  cardPassword2: InputHook<string>;
};

const CardNicknameInputModal = ({
  closeModal,
  cardType,
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: CardNicknameInputModalProps) => {
  const navigate = useNavigate();
  const [cardNickName, setCardNickName] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;

    const postData: Omit<CardType, 'id'> = {
      cardNickName,
      cardType,
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwner.value,
      expired: cardExpire.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    if (!fetchNewCardData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate(LOCATION.CARD_LIST_PAGE);
  };

  const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNickName(e.target.value);
  };

  return createPortal(
    <>
      <div
        className="input-nickname-box-backdrop"
        onClick={() => {
          closeModal(false);
        }}
      ></div>
      <div className="input-nickname-box">
        <div className="nickname-box-main-font">거의 다 왔어요!</div>
        <div className="card-box">
          <Card
            cardType={cardType}
            cardNumber={cardNumber.value}
            cardOwner={cardOwner.value}
            expired={cardExpire.value}
            securityCode={securityCode.value}
          />
        </div>
        <form onSubmit={onSubmit}>
          <input
            onChange={handleNickname}
            className="nickname-input"
            placeholder="닉네임을 입력해주세요!"
            autoFocus
            type="text"
            maxLength={10}
          />
          <button className="card-submit-button" type="submit">
            확인
          </button>
        </form>
      </div>
    </>,
    document.body
  );
};

export default CardNicknameInputModal;
