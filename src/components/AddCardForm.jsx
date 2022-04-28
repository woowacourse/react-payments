import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { isOverMaxLength, isOutOfRange } from '../util';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../constants';

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
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            value={cardForm.firstCardNumber}
            name="firstCardNumber"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            value={cardForm.secondCardNumber}
            name="secondCardNumber"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
            value={cardForm.thirdCardNumber}
            name="thirdCardNumber"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
            value={cardForm.fourthCardNumber}
            name="fourthCardNumber"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <Input
            placeholder="MM"
            length={MAX_LENGTH.DATE}
            minLength={MIN_LENGTH.MONTH}
            min={RANGE.MONTH_MIN}
            max={RANGE.MONTH_MAX}
            value={cardForm.expireMonth}
            name="expireMonth"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN, isOutOfRange }}
          />
          /
          <Input
            placeholder="YY"
            length={MAX_LENGTH.DATE}
            value={cardForm.expireYear}
            name="expireYear"
            updateCardForm={updateCardForm}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
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
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          length={MAX_LENGTH.NAME}
          minLength={MIN_LENGTH.NAME}
          updateNameLength={updateNameLength}
          value={cardForm.ownerName}
          name="ownerName"
          updateCardForm={updateCardForm}
          validators={{ isOverMaxLength }}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <Input
          size="w-25"
          type="password"
          length={MAX_LENGTH.SECURITY_CODE}
          value={cardForm.securityCode}
          name="securityCode"
          updateCardForm={updateCardForm}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
        <div className="help-tip">
          <p>카드 뒷면 끝 세 자리를 입력해주세요.</p>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <Input
          size="w-15 mr-10"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          value={cardForm.firstPassword}
          name="firstPassword"
          updateCardForm={updateCardForm}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
        <Input
          size="w-15 mr-10"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          value={cardForm.secondPassword}
          name="secondPassword"
          updateCardForm={updateCardForm}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
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
  updateCard: PropTypes.func,
  addCard: PropTypes.func,
};

export default AddCardForm;
