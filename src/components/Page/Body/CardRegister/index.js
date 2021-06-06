import React, { useContext, useEffect, useState } from 'react';

import { Card } from '../../../Card';
import { Modal } from '../../../Modal';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';

import {
  isEnglishTextType,
  isMonthType,
  isNumberType,
  isValidYearType,
} from '../../../../utils/validators.js';
import { CardContext } from '../../../../contexts/CardContextProvider.js';
import { PageContext } from '../../../../contexts/PageContextProvider.js';

import { PageBody } from '../../../../utils/style/Page.js';
import * as Styled from './style.js';

export const CardRegister = () => {
  const { updateCardContent, resetCurrentCard, generateCardId } = useContext(CardContext);
  const { setCurrentPage } = useContext(PageContext);

  const [company, setCompany] = useState('');
  const [numbers, setNumbers] = useState({ first: '', second: '', third: '', fourth: '' });
  const [validDay, setValidDay] = useState({ month: '', year: '' });
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState({ firstDigit: '', secondDigit: '' });
  const [inputValid, setInputValid] = useState({
    company: true,
    first: true,
    second: true,
    third: true,
    fourth: true,
    month: true,
    year: true,
    cvc: true,
    firstDigit: true,
    secondDigit: true,
  });
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    resetCurrentCard();
  }, [resetCurrentCard]);

  const handleCompanyChange = (companyName) => {
    setInputValid((inputValid) => ({ ...inputValid, company: true }));
    setCompany(companyName);
  };

  const handleNumbersChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setNumbers((numbers) => ({ ...numbers, [inputType]: filteredValue }));
  };

  const handleNumbersBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    if (inputValue.length !== 4) {
      setInputValid((inputValid) => ({ ...inputValid, [inputType]: false }));
      return;
    }

    const invalidNumber = Object.keys(numbers).find((key) => !numbers[key]);

    if (invalidNumber) {
      setInputValid((inputValid) => ({ ...inputValid, [invalidNumber]: false }));
    }
  };

  const handleValidDayChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setValidDay((validDay) => ({ ...validDay, [inputType]: filteredValue }));
  };

  const handleValidDayBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    if ((inputType === 'month' && !isMonthType(inputValue)) || !validDay['month']) {
      setInputValid((inputValid) => ({ ...inputValid, month: false }));
      return;
    }

    if ((inputType === 'year' && !isValidYearType(inputValue)) || !validDay['year']) {
      setInputValid((inputValid) => ({ ...inputValid, year: false }));
    }
  };

  const handleOwnerChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isEnglishTextType(text) ? text : ''))
      .join('');

    setOwner(filteredValue);
  };

  const handleCvcChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setCvc(filteredValue);
  };

  const handleCvcBlur = (e) => {
    const inputValue = e.target.value;

    setInputValid((inputValid) => ({ ...inputValid, cvc: true }));

    if (inputValue.length !== 3) {
      setInputValid((inputValid) => ({ ...inputValid, cvc: false }));
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setPassword((password) => ({ ...password, [inputType]: filteredValue }));
  };

  const handlePasswordBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    if (inputValue.length !== 1) {
      setInputValid((inputValid) => ({ ...inputValid, [inputType]: false }));
      return;
    }

    const invalidDigit = Object.keys(password).find((key) => !password[key]);

    if (invalidDigit) {
      setInputValid((inputValid) => ({ ...inputValid, [invalidDigit]: false }));
    }
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
    return Object.values(inputValid).every((value) => value);
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

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <PageBody>
      <Styled.CardContainer>
        <Card
          size={'medium'}
          company={company}
          numbers={numbers}
          owner={owner}
          validDay={validDay}
          onClick={openModal}
        />
      </Styled.CardContainer>
      <Styled.CardCreateFormContainer>
        <CardCreateForm
          numbers={{
            value: numbers,
            handleChange: handleNumbersChange,
            handleBlur: handleNumbersBlur,
            isValid: {
              first: inputValid.first,
              second: inputValid.second,
              third: inputValid.third,
              fourth: inputValid.fourth,
            },
          }}
          validDay={{
            value: validDay,
            handleChange: handleValidDayChange,
            handleBlur: handleValidDayBlur,
            isValid: { month: inputValid.month, year: inputValid.year },
          }}
          owner={{ value: owner, handleChange: handleOwnerChange, isValid: true }}
          cvc={{
            value: cvc,
            handleChange: handleCvcChange,
            handleBlur: handleCvcBlur,
            isValid: inputValid.cvc,
          }}
          password={{
            value: password,
            handleChange: handlePasswordChange,
            handleBlur: handlePasswordBlur,
            isValid: { firstDigit: inputValid.firstDigit, secondDigit: inputValid.secondDigit },
          }}
          isValidEveryInput={isValidEveryInput() && hasSubmittedEveryInput()}
          submitCardDetail={submitCardDetail}
        />
      </Styled.CardCreateFormContainer>
      {isModalOpened && (
        <Modal handleModalClose={closeModal}>
          <CardCompanyList handleCompanyChange={handleCompanyChange} selectedCompany={company} />
        </Modal>
      )}
    </PageBody>
  );
};
