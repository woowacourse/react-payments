import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MAX_LENGTH } from '../constants';
import CardNumberInput from './CardNumberInput';
import PasswordInput from './PasswordInput';
import NameInput from './NameInput';
import SecurityCodeInput from './SecurityCodeInput';
import MonthInput from './MonthInput';
import YearInput from './YearInput';

function AddCardForm({ updateCard, addCard }) {
  const [cardForm, setCardForm] = useState({
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  });
  const [nameLength, setNameLength] = useState(0);

  const updateNameLength = (name) => {
    setNameLength(name.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(cardForm);
  };

  const updateCardForm = (name, value) => {
    setCardForm((prevCardForm) => {
      return { ...prevCardForm, [name]: value };
    });
  };

  useEffect(() => {
    updateCard(cardForm);
  }, [cardForm]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <CardNumberInput
            value={cardForm.firstCardNumber}
            name="firstCardNumber"
            updateCardForm={updateCardForm}
          />
          <CardNumberInput
            value={cardForm.secondCardNumber}
            name="secondCardNumber"
            updateCardForm={updateCardForm}
          />
          <CardNumberInput
            type="password"
            value={cardForm.thirdCardNumber}
            name="thirdCardNumber"
            updateCardForm={updateCardForm}
          />
          <CardNumberInput
            type="password"
            value={cardForm.fourthCardNumber}
            name="fourthCardNumber"
            updateCardForm={updateCardForm}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <MonthInput
            value={cardForm.expireMonth}
            name="expireMonth"
            updateCardForm={updateCardForm}
          />
          /
          <YearInput
            value={cardForm.expireYear}
            name="expireYear"
            updateCardForm={updateCardForm}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="owner-name-wrapper">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">
            {nameLength}/{MAX_LENGTH.NAME}
          </span>
        </div>
        <NameInput
          value={cardForm.ownerName}
          name="ownerName"
          updateNameLength={updateNameLength}
          updateCardForm={updateCardForm}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <SecurityCodeInput
          value={cardForm.securityCode}
          name="securityCode"
          updateCardForm={updateCardForm}
        />
        <div className="help-tip">
          <p>카드 뒷면 끝 세 자리를 입력해주세요.</p>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <PasswordInput
          value={cardForm.firstPassword}
          name="firstPassword"
          updateCardForm={updateCardForm}
        />
        <PasswordInput
          value={cardForm.secondPassword}
          name="secondPassword"
          updateCardForm={updateCardForm}
        />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="button-box">
        <button type="submit" className="button-text">
          다음
        </button>
      </div>
    </form>
  );
}

AddCardForm.propTypes = {
  updateCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};

export default AddCardForm;
