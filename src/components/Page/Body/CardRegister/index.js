import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { Modal } from '../../../Modal';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';
import {
  isEnglishTextType,
  isMonthType,
  isNumberType,
  isValidYearType,
} from '../../../../utils/validators.js';

/**
 * Primary UI component for user interaction
 */
export const CardRegister = ({ setCurrentPage, updateCardContent }) => {
  const [company, setCompany] = useState('');
  const [numbers, setNumbers] = useState({ first: '', second: '', third: '', fourth: '' });
  const [validDay, setValidDay] = useState({ month: '', year: '' });
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState({ firstDigit: '', secondDigit: '' });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleCompanyChange = (companyName) => {
    setCompany(companyName);
  };

  const handleNumbersChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setNumbers({ ...numbers, [e.target.name]: filteredValue });
  };

  const handleValidDayChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setValidDay({ ...validDay, [e.target.name]: filteredValue });
  };

  const handleValidDayBlur = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    if (inputType === 'month' && isMonthType(inputValue)) {
      return;
    }

    if (inputType === 'year' && isValidYearType(inputValue)) {
      return;
    }

    console.log(inputType);
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

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setPassword({ ...password, [e.target.name]: filteredValue });
  };

  const isValidEveryInput = () => {
    return (
      company &&
      numbers.first.length === 4 &&
      numbers.second.length === 4 &&
      numbers.third.length === 4 &&
      numbers.fourth.length === 4 &&
      validDay.month.length === 2 &&
      validDay.year.length === 2 &&
      cvc.length === 3 &&
      password.firstDigit &&
      password.secondDigit
    );
  };

  const submitCardDetail = (e) => {
    e.preventDefault();

    const cardDetail = { company, numbers, validDay, owner, cvc, password };

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
    <>
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
            isValid: true,
          }}
          validDay={{
            value: validDay,
            handleChange: handleValidDayChange,
            handleBlur: handleValidDayBlur,
            isValid: true,
          }}
          owner={{ value: owner, handleChange: handleOwnerChange, isValid: true }}
          cvc={{ value: cvc, handleChange: handleCvcChange, isValid: true }}
          password={{ value: password, handleChange: handlePasswordChange, isValid: true }}
          isValidEveryInput={isValidEveryInput()}
          submitCardDetail={submitCardDetail}
        />
      </Styled.CardCreateFormContainer>
      {isModalOpened && (
        <Modal handleModalClose={closeModal}>
          <CardCompanyList handleCompanyChange={handleCompanyChange} selectedCompany={company} />
        </Modal>
      )}
    </>
  );
};

// CardCreateForm.propTypes = {};

// CardCreateForm.defaultProps = {};
