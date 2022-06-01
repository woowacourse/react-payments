import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { CardListContext } from '../context/CardListContext';

import useInput from '../hooks/useInput';
import useInputArray from '../hooks/useInputArray';

import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardPreview,
  CardSecurityCodeInput,
} from '../components';
import { Header, Title } from '../components/common/styled';
import Button from '../components/common/Button';
import Form from '../components/common/Form';
import GoBackButton from '../components/GoBackButton';

import { ADD_CARD_FORM_CONDITION, CONFIRM_MESSAGE } from '../constants';
import {
  isValidCardExpireDateUnit,
  isValidCardHolderName,
  isValidCardNumberUnit,
  isValidCardPasswordUnit,
  isValidCardSecurityCode,
} from './validators';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 25px;
`;

export default function AddCardPage() {
  const {
    state: cardNumber,
    onChange: onChangeCardNumberUnit,
    isComplete: isCompleteCardNumber,
    isError: isInvalidCardNumberInput,
  } = useInputArray(
    ['', '', '', ''],
    isValidCardNumberUnit,
    ADD_CARD_FORM_CONDITION.NUMBER_UNIT_COUNT * ADD_CARD_FORM_CONDITION.NUMBER_UNIT_LENGTH
  );

  const {
    state: expireDate,
    onChange: onChangeExpireDateUnit,
    isComplete: isCompleteExpireDate,
    isError: isInvalidExpireDateInput,
  } = useInputArray(['', ''], isValidCardExpireDateUnit, ADD_CARD_FORM_CONDITION.EXPIRE_DATE_LENGTH);

  const {
    state: holderName,
    onChange: onChangeHolderName,
    isError: isInvalidCardHolderNameInput,
  } = useInput('', isValidCardHolderName);

  const {
    state: securityCode,
    onChange: onChangeSecurityCode,
    isComplete: isCompleteSecurityCode,
    isError: isInvalidSecurityCodeInput,
  } = useInput('', isValidCardSecurityCode, ADD_CARD_FORM_CONDITION.SECURITY_CODE_LENGTH);

  const {
    state: password,
    onChange: onChangePasswordUnit,
    isComplete: isCompletePassword,
    isError: isInvalidPasswordInputInput,
  } = useInputArray(['', ''], isValidCardPasswordUnit, ADD_CARD_FORM_CONDITION.PASSWORD_LENGTH);

  const { addNewCard } = useContext(CardListContext);
  const navigate = useNavigate();

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm(CONFIRM_MESSAGE.ADD_CARD_FORM_SUBMIT(cardNumber, expireDate, holderName))) {
      const newCardId = addNewCard({ cardNumber, expireDate, holderName });
      navigate(`/addCardResult/${newCardId}`, {
        replace: true,
      });
    }
  };

  const CardInfoSubmitButton = () => {
    return (
      <ButtonWrapper>
        <Button type="submit">다음</Button>
      </ButtonWrapper>
    );
  };

  return (
    <>
      <Header>
        <GoBackButton />
        <Title>카드 추가</Title>
      </Header>
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        isComplete={isCompleteCardNumber && isCompleteExpireDate && isCompleteSecurityCode && isCompletePassword}
      />
      <Form onSubmit={handleCardInfoSubmit}>
        <CardNumberInput
          cardNumber={cardNumber}
          onChange={onChangeCardNumberUnit}
          isInvalid={isInvalidCardNumberInput}
          isComplete={isCompleteCardNumber}
        />
        <CardExpireDateInput
          expireDate={expireDate}
          onChange={onChangeExpireDateUnit}
          isInvalid={isInvalidExpireDateInput}
          isComplete={isCompleteExpireDate}
        />
        <CardHolderNameInput
          holderName={holderName}
          onChange={onChangeHolderName}
          isInvalid={isInvalidCardHolderNameInput}
          isComplete={holderName !== ''}
        />
        <CardSecurityCodeInput
          securityCode={securityCode}
          onChange={onChangeSecurityCode}
          isInvalid={isInvalidSecurityCodeInput}
          isComplete={isCompleteSecurityCode}
        />
        <CardPasswordInput
          password={password}
          onChange={onChangePasswordUnit}
          isInvalid={isInvalidPasswordInputInput}
          isComplete={isCompletePassword}
        />
        {isCompleteCardNumber && isCompleteExpireDate && isCompleteSecurityCode && isCompletePassword && (
          <CardInfoSubmitButton />
        )}
      </Form>
    </>
  );
}
