import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { CARD_COMPANY } from '../../constants';
import './style.css';
import '../../index.css';
import { useHistory, useLocation } from 'react-router';
import Form from './Form';
import Header from './Header';
import Api from '../../api';

export default function AddCardComplete() {
  const [nickName, setNickName] = useState('');

  const history = useHistory();
  const location = useLocation();

  const {
    state: {
      card: { serialNumber, expirationDate, userName, securityCode, password, cardCompany },
    },
  } = location;

  useEffect(() => {
    setNickName(CARD_COMPANY[cardCompany].NAME);
  }, []);

  const onSubmitNickName = async (event) => {
    event.preventDefault();

    await Api.card.post({
      userName,
      serialNumber,
      expirationDate,
      securityCode,
      password,
      cardCompany,
      nickName,
    });

    history.push('/');
  };

  return (
    <div className="add-card-complete__container">
      <Header />
      <Card
        userName={userName}
        companyName={CARD_COMPANY[cardCompany].NAME}
        color={CARD_COMPANY[cardCompany].COLOR}
        serialNumber={serialNumber}
        expirationDate={expirationDate}
        size="large"
      />
      <Form onSubmitNickName={onSubmitNickName} nickName={nickName} setNickName={setNickName} />
    </div>
  );
}
