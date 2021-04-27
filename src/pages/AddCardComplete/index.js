import React from 'react';
import { CARD, CARD_COMPANY } from '../../constants';
import { Card, TextButton } from '../../stories/components';
import { MMYYDateFormatter } from '../../utils/formatter';
import './style.css';
import '../../index.css';

export default function AddCardComplete({
  userName,
  cardCompany,
  serialNumber,
  expirationDate,
  cardNickName,
  setCardNickName,
  setPage,
}) {
  return (
    <div className={'add-card-complete__container'}>
      <h1 className="add-card-complete__title">카드 등록이 완료되었습니다.</h1>
      <Card
        userName={userName}
        cardCompanyName={CARD_COMPANY[cardCompany].NAME}
        cardColor={CARD_COMPANY[cardCompany].COLOR}
        cardNumber={serialNumber}
        expirationDate={MMYYDateFormatter(expirationDate)}
        size="large"
      />
      <input
        className="add-card-complete__input"
        value={cardNickName || CARD_COMPANY[cardCompany].NAME}
        onChange={(event) => {
          setCardNickName(event.target.value);
        }}
        maxLength={CARD.NICKNAME_MAX_LENGTH}
      />
      <div
        className="bottom-right-button"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <TextButton
          text="확인"
          onClick={() => {
            setPage('addCardForm');
          }}
        />
      </div>
    </div>
  );
}
