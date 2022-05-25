import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAX_LENGTH } from '../../constants';
import CardNumberInput from './CardNumberInput';
import PasswordInput from './PasswordInput';
import NameInput from './NameInput';
import SecurityCodeInput from './SecurityCodeInput';
import MonthInput from './MonthInput';
import YearInput from './YearInput';
import AddCardContext from '../../AddCardContext';
import { checkValidDate } from '../../validator';

function AddCardForm() {
  const { card } = useContext(AddCardContext);

  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigator('/success', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <CardNumberInput value={card.firstCardNumber} name="firstCardNumber" />
          <CardNumberInput value={card.secondCardNumber} name="secondCardNumber" />
          <CardNumberInput type="password" value={card.thirdCardNumber} name="thirdCardNumber" />
          <CardNumberInput type="password" value={card.fourthCardNumber} name="fourthCardNumber" />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <MonthInput value={card.expireMonth} name="expireMonth" expireYear={card.expireYear} />
          /
          <YearInput value={card.expireYear} name="expireYear" expireMonth={card.expireMonth} />
        </div>
      </div>
      <div className="input-container">
        <div className="owner-name-wrapper">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">
            {card.ownerName.length}/{MAX_LENGTH.NAME}
          </span>
        </div>
        <NameInput value={card.ownerName} name="ownerName" />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <SecurityCodeInput value={card.securityCode} name="securityCode" />
        <div className="help-tip">
          <p>카드 뒷면 끝 세 자리를 입력해주세요.</p>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <PasswordInput value={card.firstPassword} name="firstPassword" />
        <PasswordInput value={card.secondPassword} name="secondPassword" />
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

export default AddCardForm;
