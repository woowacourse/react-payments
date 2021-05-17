import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { Modal } from '../../../Modal';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';
import { isEnglishTextType, isNumberType, isValidDateType } from '../../../../utils/validators.js';

/**
 * Primary UI component for user interaction
 */

export const CardRegister = ({ setCurrentPage, updateCardContent }) => {
  const [company, setCompany] = useState('');
  const [numbers, setNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    latelyType: 'first',
  });
  const [validDay, setValidDay] = useState({ month: '', year: '', latelyType: 'month' });
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState({
    firstDigit: '',
    secondDigit: '',
    latelyType: 'firstDigit',
  });
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
  const formRef = useRef();

  const handleCompanyChange = (companyName) => {
    setInputValid((inputValid) => ({ ...inputValid, company: true }));
    setCompany(companyName);
    closeModal();
  };

  const handleNumbersChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setNumbers((numbers) => ({ ...numbers, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = numbers.latelyType;
    const inputValue = numbers[inputType];

    if (inputValue.length !== 4) return;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    const emptyValue = Object.keys(numbers).find((key) => !numbers[key]);

    if (!emptyValue) {
      return;
    }

    formRef.current[emptyValue].focus();
  }, [numbers, formRef]);

  const handleNumbersBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(numbers).forEach((key) => {
      if (key === 'latelyType') return;

      if (!numbers[key] || numbers[key].length !== 4) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
  };

  const handleValidDayChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setValidDay((validDay) => ({ ...validDay, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = validDay.latelyType;
    const inputValue = validDay[inputType];

    if (inputValue.length !== 2) return;

    if (isValidDateType[inputType](inputValue)) {
      setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));
    }

    const emptyValue = Object.keys(validDay).find((key) => !validDay[key]);

    if (!emptyValue) return;

    formRef.current[emptyValue].focus();
  }, [validDay, formRef]);

  const handleValidDayBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(validDay).forEach((key) => {
      if (key === 'latelyType') return;

      if (!validDay[key] || !isValidDateType[key](validDay[key])) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
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

  useEffect(() => {
    if (cvc.length !== 3) return;

    setInputValid((inputValid) => ({ ...inputValid, cvc: true }));
  }, [cvc]);

  const handleCvcBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    if (!cvc || cvc.length !== 3) {
      setInputValid((inputValid) => ({ ...inputValid, cvc: false }));
      return;
    }

    setInputValid((inputValid) => ({ ...inputValid, cvc: true }));
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const inputType = e.target.name;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isNumberType(text) ? text : ''))
      .join('');

    setPassword((password) => ({ ...password, [inputType]: filteredValue, latelyType: inputType }));
  };

  useEffect(() => {
    const inputType = password.latelyType;
    const inputValue = password[inputType];

    if (inputValue.length !== 1) return;

    setInputValid((inputValid) => ({ ...inputValid, [inputType]: true }));

    const emptyValue = Object.keys(password).find((key) => !password[key]);

    if (!emptyValue) return;

    formRef.current[emptyValue].focus();
  }, [password, formRef]);

  const handlePasswordBlur = (e) => {
    if (e.relatedTarget !== null && e.currentTarget === e.relatedTarget.parentNode) return;

    Object.keys(password).forEach((key) => {
      if (!password[key]) {
        setInputValid((inputValid) => ({ ...inputValid, [key]: false }));
        return;
      }

      setInputValid((inputValid) => ({ ...inputValid, [key]: true }));
    });
  };

  const hasSubmittedEveryInput = () => {
    return (
      company &&
      Object.values(numbers).every((value) => value) &&
      Object.values(validDay).every((value) => value) &&
      cvc &&
      Object.values(password).every((value) => value)
    );
  };

  const isValidEveryInput = () => {
    return Object.values(inputValid).every((value) => value);
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
          formRef={formRef}
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
    </>
  );
};

// CardCreateForm.propTypes = {};

// CardCreateForm.defaultProps = {};
