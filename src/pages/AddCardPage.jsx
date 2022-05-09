import { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import useInputArray from '../hooks/useInputArray';

import { CardListContext } from '../context';
import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardPreview,
  CardSecurityCodeInput,
} from '../components';
import { Header, Title } from '../components/common/styled';
import Button from './../components/common/Button';
import Form from '../components/common/Form';
import GoBackButton from '../components/GoBackButton';

import { ADD_CARD_FORM_CONDITION, ADD_CARD_FORM_SUBMIT_CONFIRM_MESSAGE } from '../constants';
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
  const [cardNumber, onChangeCardNumberUnit, isCompleteCardNumber, isInvalidCardNumberInput] = useInputArray(
    ['', '', '', ''],
    isValidCardNumberUnit,
    ADD_CARD_FORM_CONDITION.NUMBER_UNIT_COUNT * ADD_CARD_FORM_CONDITION.NUMBER_UNIT_LENGTH
  );

  const [expireDate, onChangeExpireDateUnit, isCompleteExpireDate, isInvalidExpireDateInput] = useInputArray(
    ['', ''],
    isValidCardExpireDateUnit,
    ADD_CARD_FORM_CONDITION.EXPIRE_DATE_LENGTH
  );

  const [holderName, onChangeHolderName, _, isInvalidCardHolderNameInput] = useInput('', isValidCardHolderName);
  const [securityCode, onChangeSecurityCode, isCompleteSecurityCode, isInvalidSecurityCodeInput] = useInput(
    '',
    isValidCardSecurityCode,
    ADD_CARD_FORM_CONDITION.SECURITY_CODE_LENGTH
  );
  const [password, onChangePasswordUnit, isCompletePassword, isInvalidPasswordInputInput] = useInputArray(
    ['', ''],
    isValidCardPasswordUnit,
    ADD_CARD_FORM_CONDITION.PASSWORD_LENGTH
  );

  const { addNewCard } = useContext(CardListContext);
  const navigate = useNavigate();

  const handleCardInfoSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm(ADD_CARD_FORM_SUBMIT_CONFIRM_MESSAGE(cardNumber, expireDate, holderName))) {
      const cardIndex = addNewCard({ cardNumber, expireDate, holderName });
      navigate(`/addCardResult/${cardIndex}`, {
        replace: true,
        state: { fromAddCardForm: true, cardIndex },
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
      <Form onSubmit={handleCardInfoSubmit} autoComplete="off">
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
