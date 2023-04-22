import React, { useEffect, useContext, useState } from 'react';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import useCardList from '../../../hooks/useCardList';
import { CardNumber } from '../cardNumber/CardNumber';
import ExpireDate from '../expireDate/ExpireDate';
import OwnerNameInput from '../ownerNameInput/OwnerName';
import SecurityCode from '../securityCode/SecurityCode';
import CardPassword from '../cardPassword/CardPassword';
import CreditCardContext from '../../../contexts/InputValueContext';

function CardRegisterForm() {
  console.log('>>> CardRegister 시작');
  const navigation = useNavigate();
  const creditCardInfo = useContext(CreditCardContext)[0];

  const [nextShow, setNextShow] = useState(false);
  const { saveCard } = useCardList({ key: 'card-list' });

  useEffect(() => {
    const { cardNumber, expirationDate, securityCode, password, ownerName } = creditCardInfo;
    try {
      const exceptOwnerName =
        cardNumber.join('').length !== 16 ||
        expirationDate.join('').length !== 4 ||
        securityCode.length !== 3 ||
        password.join('').length !== 2;

      if ((ownerName.length > 0 && ownerName.length < 3) || exceptOwnerName) {
        throw new Error();
      }
      setNextShow(true);
    } catch {
      setNextShow(false);
    }
  }, [creditCardInfo]);

  const cardInputSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    saveCard(creditCardInfo);
    navigation('/card-list');
  };

  return (
    <Form onSubmit={cardInputSubmit}>
      <CardNumber />
      <ExpireDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      {nextShow && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <NextButton>다음</NextButton>
        </div>
      )}
    </Form>
  );
}

export default CardRegisterForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

const NextButton = styled.button`
  width: 51px;

  background: none;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;
