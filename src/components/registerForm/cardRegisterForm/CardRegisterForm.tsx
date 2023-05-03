import React, { useContext } from 'react';

import { Form, useNavigate } from 'react-router-dom';
import { CardNumber } from '../cardNumber/CardNumber';
import ExpirationDate from '../expirationDate/ExpirationDate';
import OwnerNameInput from '../ownerNameInput/OwnerName';
import SecurityCode from '../securityCode/SecurityCode';
import CardPassword from '../cardPassword/CardPassword';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { NextButton } from './CardRegisterForm.style';
import CreditCardContextType from '../../../@types/creditCardContextType';
import {
  VALID_CARD_NUMBER_REGEX,
  VALID_EXPIRATION_MONTH_REGEX,
  VALID_EXPIRATION_YEAR_REGEX,
  VALID_PASSWORD_REGEX,
  VALID_SECURITY_CODE_REGEX,
} from '../../../utils/regexp';

function CardRegisterForm() {
  const navigation = useNavigate();
  const { creditCard } = useContext(CreditCardContext) as CreditCardContextType;
  const { cardNumber, securityCode, password, expirationDate } = creditCard;

  const hasShowButton =
    VALID_CARD_NUMBER_REGEX.test(cardNumber.join('')) &&
    VALID_EXPIRATION_MONTH_REGEX.test(expirationDate[0]) &&
    VALID_EXPIRATION_YEAR_REGEX.test(expirationDate[1]) &&
    VALID_SECURITY_CODE_REGEX.test(securityCode) &&
    VALID_PASSWORD_REGEX.test(password.join(''));

  const _onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    navigation('/register-success');
  };

  return (
    <Form onSubmit={_onSubmit}>
      <CardNumber />
      <ExpirationDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      {hasShowButton && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <NextButton role="button">다음</NextButton>
        </div>
      )}
    </Form>
  );
}

export default CardRegisterForm;
