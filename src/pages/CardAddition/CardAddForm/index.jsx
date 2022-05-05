import React, { useState, useCallback } from 'react';

import useCardState from '../../../hooks/useCardState';

import Button from '../../../components/Button';
import CardNumber from '../../../system/CardNumber';
import CardExpiration from '../../../system/CardExpiration';
import CardOwner from '../../../system/CardOwner';
import CardCvc from '../../../system/CardCvc';
import CardPassword from '../../../system/CardPassword';
import ErrorMessage from '../../../system/ErrorMessage';

import * as validator from '../../../lib/validation';
import { isEmpty, isAllEmpty } from '../../../utils';

const CardAddForm = () => {
  const cardNumber = useCardState((state) => state.cardNumber);
  const [cardNumberError, setCardNumberError] = useState('');
  const cardNumberValidation = useCallback(() =>
    isAllEmpty(cardNumber) || validator.checkCardNumber(cardNumber),
    [cardNumber],
  );

  const cardExpiration = useCardState((state) => state.cardExpiration);
  const [cardExpirationError, setCardExpirationError] = useState('');
  const cardExpirationValidation = useCallback(() =>
    isAllEmpty(cardExpiration) || validator.checkCardExpiration(cardExpiration),
    [cardExpiration],
  );

  const cardOwner = useCardState((state) => state.cardOwner);
  const [cardOwnerError, setCardOwnerError] = useState('');
  const cardOwnerValidation = useCallback(() =>
    validator.checkCardOwner(cardOwner),
    [cardOwner],
  );

  const cardCvc = useCardState((state) => state.cardCvc);
  const [cardCvcError, setCardCvcError] = useState('');
  const cardCvcValidation = useCallback(() =>
    isEmpty(cardCvc) || validator.checkCardCvc(cardCvc),
    [cardCvc],
  );

  const cardPassword = useCardState((state) => state.cardPassword);
  const [cardPasswordError, setCardPasswordError] = useState('');
  const cardPasswordValidation = useCallback(() =>
    isAllEmpty(cardPassword) || validator.checkCardPassword(cardPassword),
    [cardPassword],
  );

  const cardCompanyName = useCardState((state) => state.cardCompanyName);
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  const checkAllInput = () => {
    try {
      validator.checkCardCompany(cardCompanyName);
      validator.checkCardNumber(cardNumber);
      validator.checkCardExpiration(cardExpiration);
      validator.checkCardOwner(cardOwner);
      validator.checkCardCvc(cardCvc);
      validator.checkCardPassword(cardPassword);

      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <form>
      <CardNumber />
      <ErrorMessage
        setChildren={setCardNumberError}
        validation={cardNumberValidation}
      >
        {cardNumberError}
      </ErrorMessage>
      <CardExpiration />
      <ErrorMessage
        setChildren={setCardExpirationError}
        validation={cardExpirationValidation}
      >
        {cardExpirationError}
      </ErrorMessage>
      <CardOwner />
      <ErrorMessage
        setChildren={setCardOwnerError}
        validation={cardOwnerValidation}
      >
        {cardOwnerError}
      </ErrorMessage>
      <CardCvc />
      <ErrorMessage
        setChildren={setCardCvcError}
        validation={cardCvcValidation}
      >
        {cardCvcError}
      </ErrorMessage>
      <CardPassword />
      <ErrorMessage
        setChildren={setCardPasswordError}
        validation={cardPasswordValidation}
      >
        {cardPasswordError}
      </ErrorMessage>
      <Button disabled={!checkAllInput()} color={cardCompanyColor}>
        다음
      </Button>
    </form>
  );
};

export default CardAddForm;
