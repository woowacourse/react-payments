import React, { useContext } from 'react';

import { Form, useNavigate } from 'react-router-dom';
import { CardNumber } from '../cardNumber/CardNumber';
import ExpireDate from '../expireDate/ExpireDate';
import OwnerNameInput from '../ownerNameInput/OwnerName';
import SecurityCode from '../securityCode/SecurityCode';
import CardPassword from '../cardPassword/CardPassword';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { NextButton } from './CardRegisterForm.style';
import CreditCardContextType from '../../../@types/creditCardContextType';

function CardRegisterForm() {
  const navigation = useNavigate();
  const { creditCard } = useContext(CreditCardContext) as CreditCardContextType;
  const { cardNumber, securityCode, password, expirationDate } = creditCard;

  const hasShowButton =
    cardNumber.join('').length === 16 &&
    /^(0[1-9]|1[0-2]|2[0-9]|3[0-1])$/.test(expirationDate[0]) &&
    /^\d{2}$/.test(expirationDate[1]) &&
    securityCode.length === 3 &&
    password.join('').length === 2;

  console.log('>>> hasShowButton:', hasShowButton);
  const _onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // TODO: 검증
    navigation('/register-success');
  };

  return (
    <Form onSubmit={_onSubmit}>
      <CardNumber />
      <ExpireDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      {hasShowButton && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <NextButton>다음</NextButton>
        </div>
      )}
    </Form>
  );
}

export default CardRegisterForm;
