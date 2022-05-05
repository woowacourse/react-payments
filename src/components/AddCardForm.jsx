import React from 'react';
import PropTypes from 'prop-types';
import { MAX_LENGTH } from '../constants';
import CardNumberInput from './CardNumberInput';
import PasswordInput from './PasswordInput';
import NameInput from './NameInput';
import SecurityCodeInput from './SecurityCodeInput';
import MonthInput from './MonthInput';
import YearInput from './YearInput';

function AddCardForm({ card, updateCard, addCard }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addCard();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <CardNumberInput
            value={card.firstCardNumber}
            name="firstCardNumber"
            updateCard={updateCard}
          />
          <CardNumberInput
            value={card.secondCardNumber}
            name="secondCardNumber"
            updateCard={updateCard}
          />
          <CardNumberInput
            type="password"
            value={card.thirdCardNumber}
            name="thirdCardNumber"
            updateCard={updateCard}
          />
          <CardNumberInput
            type="password"
            value={card.fourthCardNumber}
            name="fourthCardNumber"
            updateCard={updateCard}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <MonthInput value={card.expireMonth} name="expireMonth" updateCard={updateCard} />
          /
          <YearInput value={card.expireYear} name="expireYear" updateCard={updateCard} />
        </div>
      </div>
      <div className="input-container">
        <div className="owner-name-wrapper">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">
            {card.ownerName.length}/{MAX_LENGTH.NAME}
          </span>
        </div>
        <NameInput value={card.ownerName} name="ownerName" updateCard={updateCard} />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <SecurityCodeInput value={card.securityCode} name="securityCode" updateCard={updateCard} />
        <div className="help-tip">
          <p>카드 뒷면 끝 세 자리를 입력해주세요.</p>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <PasswordInput value={card.firstPassword} name="firstPassword" updateCard={updateCard} />
        <PasswordInput value={card.secondPassword} name="secondPassword" updateCard={updateCard} />
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
  card: PropTypes.shape({
    firstCardNumber: PropTypes.string.isRequired,
    secondCardNumber: PropTypes.string.isRequired,
    thirdCardNumber: PropTypes.string.isRequired,
    fourthCardNumber: PropTypes.string.isRequired,
    expireMonth: PropTypes.string.isRequired,
    expireYear: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    securityCode: PropTypes.string.isRequired,
    firstPassword: PropTypes.string.isRequired,
    secondPassword: PropTypes.string.isRequired,
  }).isRequired,
  updateCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};

export default AddCardForm;
