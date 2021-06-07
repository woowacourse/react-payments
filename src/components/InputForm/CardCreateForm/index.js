import React, { useContext } from 'react';

import { InputContainer } from '../InputContainer';
import { NumbersInputContainer } from '../InputContainer/NumbersInputContainer';
import { ValidDayInputContainer } from '../InputContainer/ValidDayInputContainer';
import { OwnerInputContainer } from '../InputContainer/OwnerInputContainer';
import { CvcInputContainer } from '../InputContainer/CvcInputContainer';
import { PasswordInputContainer } from '../InputContainer/PasswordInputContainer';
import { InputButton } from '../InputButton';

import { INPUT_TITLE, VALID_MESSAGES } from '../../../utils/constants/messages.js';
import { CardFormContext } from '../../../contexts/CardFormContextProvider';
import { CardContext } from '../../../contexts/CardContextProvider';
import { PageContext } from '../../../contexts/PageContextProvider';

import * as Styled from './style.js';

export const CardCreateForm = () => {
  const {
    company,
    numbers,
    owner,
    validDay,
    cvc,
    password,
    companyValidity,
    numbersValidity,
    validDayValidity,
    cvcValidity,
    passwordValidity,
  } = useContext(CardFormContext);
  const { updateCardContent, generateCardId } = useContext(CardContext);
  const { setCurrentPage } = useContext(PageContext);

  const hasInvalidNumbers = () => {
    return Object.keys(numbersValidity).find((key) => !numbersValidity[key]);
  };

  const hasInvalidDay = () => {
    return Object.keys(validDayValidity).find((key) => !validDayValidity[key]);
  };

  const hasInvalidPassword = () => {
    return Object.keys(passwordValidity).find((key) => !passwordValidity[key]);
  };

  const hasSubmittedEveryInput = () => {
    return (
      Boolean(company) &&
      Object.values(numbers).every((value) => value) &&
      Object.values(validDay).every((value) => value) &&
      Boolean(cvc) &&
      Object.values(password).every((value) => value)
    );
  };

  const isValidEveryInput = () => {
    return (
      companyValidity &&
      Object.values(numbersValidity).every((value) => value) &&
      Object.values(validDayValidity).every((value) => value) &&
      cvcValidity &&
      Object.values(passwordValidity).every((value) => value)
    );
  };

  const submitCardDetail = (e) => {
    e.preventDefault();

    const cardDetail = {
      company,
      numbers,
      validDay,
      owner,
      cvc,
      password,
      cardId: generateCardId(),
    };

    updateCardContent(cardDetail);
    setCurrentPage('cardRegistered');
  };

  return (
    <Styled.Form onSubmit={submitCardDetail}>
      <InputContainer
        title={INPUT_TITLE.CARD_NUMBER}
        validMessage={hasInvalidNumbers() && VALID_MESSAGES[hasInvalidNumbers()]}
      >
        <NumbersInputContainer isValid={!hasInvalidNumbers()} />
      </InputContainer>
      <InputContainer
        title={INPUT_TITLE.VALID_DAY}
        validMessage={hasInvalidDay() && VALID_MESSAGES[hasInvalidDay()]}
      >
        <ValidDayInputContainer isValid={!hasInvalidDay()} />
      </InputContainer>
      <InputContainer
        title={INPUT_TITLE.OWNER}
        isVisibleTextLength={true}
        textLength={15}
        inputValue={owner}
      >
        <OwnerInputContainer type={'text'} maxLength={15} />
      </InputContainer>
      <InputContainer title={INPUT_TITLE.CVC} validMessage={!cvcValidity && VALID_MESSAGES['cvc']}>
        <CvcInputContainer isValid={cvcValidity} type={'password'} maxLength={3} />
      </InputContainer>
      <InputContainer
        title={INPUT_TITLE.PASSWORD}
        validMessage={hasInvalidPassword() && VALID_MESSAGES[hasInvalidPassword()]}
      >
        <PasswordInputContainer isValid={!hasInvalidPassword()} />
      </InputContainer>
      <Styled.ButtonContainer>
        {isValidEveryInput() && hasSubmittedEveryInput() && <InputButton text={'다음'} />}
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
