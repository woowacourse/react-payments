import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { CARD_COMPANY } from '../../constants';
import './style.css';
import '../../index.css';
import { useHistory, useLocation } from 'react-router';
import Form from './Form';
import Header from './Header';

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
    history.push('/cardList');
  };

  return (
    <div className={'add-card-complete__container'}>
      <Header />
      <Card
        userName={userName}
        companyName={CARD_COMPANY[cardCompany].NAME}
        color={CARD_COMPANY[cardCompany].COLOR}
        number={serialNumber}
        expirationDate={expirationDate}
        size="large"
      />
      <Form
        onCardNickNameSubmit={onCardNickNameSubmit}
        cardNickName={cardNickName}
        setCardNickName={setCardNickName}
      />
    </div>
  );
}
