import React, { useEffect, useState } from 'react';
import { Card, TextButton } from '../../components';
import { CARD, CARD_COMPANY } from '../../constants';
import './style.css';
import '../../index.css';
import { useHistory, useLocation } from 'react-router';

export default function AddCardComplete({ addCards }) {
  const [cardNickName, setCardNickName] = useState('');

  const history = useHistory();
  const location = useLocation();
  const {
    state: {
      card: { serialNumber, expirationDate, userName, securityCode, password, cardCompany },
    },
  } = location;

  useEffect(() => {
    setCardNickName(CARD_COMPANY[cardCompany].NAME);
  }, []);

  const onCardNickNameSubmit = (event) => {
    event.preventDefault();

    addCards({ userName, serialNumber, expirationDate, securityCode, password, cardCompany });
    history.push('/addCardForm');
  };

  return (
    <div className={'add-card-complete__container'}>
      <h1 className="add-card-complete__title">{'카드 등록이 완료되었습니다.'}</h1>
      <Card
        userName={userName}
        companyName={CARD_COMPANY[cardCompany].NAME}
        color={CARD_COMPANY[cardCompany].COLOR}
        number={serialNumber}
        expirationDate={expirationDate}
        size="large"
      />
      <form onSubmit={onCardNickNameSubmit}>
        <input
          id="card-nickname"
          className="add-card-complete__input"
          value={cardNickName}
          onChange={(event) => {
            setCardNickName(event.target.value);
          }}
          maxLength={CARD.NICKNAME_MAX_LENGTH}
        />
        <div className="bottom-right-button">
          <TextButton>확인</TextButton>
        </div>
      </form>
    </div>
  );
}
