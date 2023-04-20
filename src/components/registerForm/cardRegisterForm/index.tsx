import React, { useEffect, useContext, useState } from 'react';

import styled from 'styled-components';
import { InputValuesContext } from '../InputValueContext';

import { useNavigate } from 'react-router-dom';
import useCardList from '../../../hooks/useCardList';
import { CardNumber } from '../cardNumber';
import ExpireDate from '../expireDate';
import OwnerNameInput from '../ownerNameInput';
import SecurityCode from '../securityCode';
import CardPassword from '../cardPassword';

const objectValueToString = (obj: { [key: string]: string }) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, '');
};

function CardRegisterForm() {
  const navigation = useNavigate();
  const [cardInput] = useContext(InputValuesContext);
  const [nextShow, setNextShow] = useState(false);
  const { saveCard } = useCardList({ key: 'card-list' });

  useEffect(() => {
    const { cardNumbers, expireDate, securityCode, password, ownerName } = cardInput;
    try {
      const exceptOwnerName =
        objectValueToString(cardNumbers).length !== 16 ||
        expireDate.length !== 5 ||
        securityCode.length !== 3 ||
        objectValueToString(password).length !== 2;

      if ((ownerName.length > 0 && ownerName.length < 3) || exceptOwnerName) {
        throw new Error();
      }
      setNextShow(true);
    } catch {
      setNextShow(false);
    }
  }, [cardInput]);

  const cardInputSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    saveCard(cardInput);
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
