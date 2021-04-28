import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { Modal } from '../../../Modal';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';

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
    setNumbers({ ...numbers, [e.target.name]: e.target.value });
  };

  const handleValidDayChange = (e) => {
    setValidDay({ ...validDay, [e.target.name]: e.target.value });
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const isValidEveryInput = () => {
    return (
      company &&
      numbers.first &&
      numbers.second &&
      numbers.third &&
      numbers.fourth &&
      validDay.month &&
      validDay.year &&
      cvc &&
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
          validDay={{ value: validDay, handleChange: handleValidDayChange, isValid: true }}
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
