import React from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';
import {
  hasSpace,
  isLengthBelow,
  isLengthOver,
  isNotAlphabet,
  isNotNumber,
} from '../../utils/validations';
import { objectToString } from '../../utils/util';

function InputForm({
  cardNumber,
  setCardNumber,
  expirationDate,
  setExpirationDate,
  ownerName,
  setOwnerName,
  securityCode,
  setSecurityCode,
  password,
  setPassword,
}) {
  const onChangeCardNumber = (key, e) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;
    if (hasSpace(cardNumber)) {
      return;
    }

    if (isNotNumber(cardNumber)) {
      return;
    }

    if (isLengthOver(cardNumber, maxLength)) {
      return;
    }

    setCardNumber(prev => ({ ...prev, [`${key}`]: cardNumber }));
  };

  const onChangeExpirationDate = (key, e) => {
    const {
      target: { value, maxLength },
    } = e;
    if (hasSpace(value)) {
      return;
    }

    if (isNotNumber(value)) {
      return;
    }

    if (isLengthOver(value, maxLength)) {
      return;
    }

    setExpirationDate(prev => ({ ...prev, [`${key}`]: value }));
  };

  const onChangeOwnerName = e => {
    const {
      target: { value },
    } = e;

    if (isNotAlphabet(value)) {
      return;
    }

    setOwnerName(value.toUpperCase());
  };

  const onChangeSecurityCode = e => {
    const {
      target: { value },
    } = e;

    if (hasSpace(value)) {
      return;
    }

    if (isNotNumber(value)) {
      return;
    }

    if (isLengthOver(value, 3)) {
      return;
    }

    setSecurityCode(value);
  };

  const onChangePassword = (key, e) => {
    const {
      target: { value },
    } = e;

    if (isNotNumber(value)) {
      return;
    }

    if (isLengthOver(value, 1)) {
      return;
    }
    setPassword(prev => ({ ...prev, [`${key}`]: value }));
  };

  const onClickNextButton = e => {
    e.preventDefault();

    if (Object.keys(cardNumber).some(key => isLengthBelow(cardNumber[key], 4))) {
      alert('카드 번호를 완벽히 입력해주세요');
      return;
    }

    if (Object.keys(expirationDate).some(key => isLengthBelow(expirationDate[key], 2))) {
      alert('만료일을 완벽히 입력해주세요');
      return;
    }

    if (isLengthBelow(securityCode, 3)) {
      alert('CVC/CVV를 완벽히 입력해주세요');
      return;
    }

    if (Object.keys(password).some(key => isLengthBelow(password[key], 1))) {
      alert('비밀번호를 완벽히 입력해주세요');
      return;
    }

    alert(`카드 번호는 ${objectToString(cardNumber)} 입니다 \n
    만료일 ${objectToString(expirationDate, '/')} 입니다 \n
    카드 소유자 이름 ${ownerName} 입니다 \n
    보안코드 ${securityCode} 입니다 \n
    비밀번호 ${objectToString(password)} \n`);
  };
  return (
    <form onSubmit={onClickNextButton}>
      <Input labelTitle="카드번호">
        <div className="input-box">
          <input
            className="input-basic"
            type="number"
            value={cardNumber['first']}
            onChange={e => onChangeCardNumber('first', e)}
            maxLength={4}
            required
          />
          <input
            className="input-basic"
            type="number"
            value={cardNumber['second']}
            onChange={e => onChangeCardNumber('second', e)}
            maxLength={4}
            required
          />
          <input
            className="input-basic"
            type="password"
            value={cardNumber['third']}
            onChange={e => onChangeCardNumber('third', e)}
            maxLength={4}
            required
          />
          <input
            className="input-basic"
            type="password"
            value={cardNumber['forth']}
            onChange={e => onChangeCardNumber('forth', e)}
            maxLength={4}
            required
          />
        </div>
      </Input>
      <Input labelTitle="만료일" hasBox>
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="number"
            placeholder="MM"
            value={expirationDate['month']}
            onChange={e => onChangeExpirationDate('month', e)}
            maxLength={2}
            required
          />
          <input
            className="input-basic"
            type="number"
            placeholder="YY"
            value={expirationDate['year']}
            onChange={e => onChangeExpirationDate('year', e)}
            maxLength={2}
            required
          />
        </div>
      </Input>
      <Input labelTitle="카드 소유자 이름(선택)">
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          onChange={onChangeOwnerName}
          maxLength={30}
        />
      </Input>
      <Input labelTitle="보안코드(CVC/CVV)">
        <input
          className="input-basic w-25"
          type="password"
          value={securityCode}
          onChange={onChangeSecurityCode}
          required
        />
      </Input>
      <Input labelTitle="카드 비밀번호">
        <input
          className="input-basic w-15"
          type="number"
          value={password['first']}
          onChange={e => onChangePassword('first', e)}
          maxLength={1}
          required
        />
        <input
          className="input-basic w-15"
          type="number"
          value={password['second']}
          onChange={e => onChangePassword('second', e)}
          maxLength={1}
          required
        />
        <input className="input-basic w-15" type="password" disabled />
        <input className="input-basic w-15" type="password" disabled />
      </Input>
      <button className="button-box">
        <span className="button-text">다음</span>
      </button>
    </form>
  );
}

InputForm.propTypes = {
  cardNumber: PropTypes.object,
  setCardNumber: PropTypes.func,
  expirationDate: PropTypes.object,
  setExpirationDate: PropTypes.func,
  ownerName: PropTypes.string,
  setOwnerName: PropTypes.func,
  securityCode: PropTypes.string,
  setSecurityCode: PropTypes.func,
  password: PropTypes.object,
  setPassword: PropTypes.func,
};

export default InputForm;
