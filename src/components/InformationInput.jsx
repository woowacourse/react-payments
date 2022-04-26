import React, { useEffect } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';
import { isLengthOver, isNotNumber } from '../utils/validations';

function InformationInput({ cardNumber, setCardNumber }) {
  useEffect(() => {
    console.log(cardNumber);
  }, [cardNumber]);

  const onChangeCardNumber = (key, e) => {
    const {
      target: { value: cardNumber },
    } = e;

    if (isNotNumber(cardNumber)) {
      return;
    }

    if (isLengthOver(cardNumber)) {
      return;
    }

    setCardNumber(prev => ({ ...prev, [`${key}`]: cardNumber }));
  };

  const onChangeExpirationDate = () => {};

  const onChangeOwnerName = () => {};

  const onChangeSecurityCode = () => {};

  const onChangePassword = () => {};

  return (
    <>
      <Input labelTitle="카드번호">
        <div className="input-box">
          <input
            className="input-basic"
            type="text"
            value={cardNumber['first']}
            onChange={e => onChangeCardNumber('first', e)}
            maxLength={4}
          />
          <input
            className="input-basic"
            type="text"
            value={cardNumber['second']}
            onChange={e => onChangeCardNumber('second', e)}
            maxLength={4}
          />
          <input
            className="input-basic"
            type="password"
            value={cardNumber['third']}
            onChange={e => onChangeCardNumber('third', e)}
            maxLength={4}
          />
          <input
            className="input-basic"
            type="password"
            value={cardNumber['forth']}
            onChange={e => onChangeCardNumber('forth', e)}
            maxLength={4}
          />
        </div>
      </Input>
      <Input labelTitle="만료일" hasBox>
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="text"
            placeholder="MM"
            value="12"
            onChange={onChangeExpirationDate}
          />
          <input
            className="input-basic"
            type="text"
            placeholder="YY"
            value="23"
            onChange={onChangeExpirationDate}
          />
        </div>
      </Input>
      <Input labelTitle="카드 소유자 이름(선택)">
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onChangeOwnerName}
        />
      </Input>
      <Input labelTitle="보안코드(CVC/CVV)">
        <input
          className="input-basic w-25"
          type="password"
          value="111"
          onChange={onChangeSecurityCode}
        />
      </Input>
      <Input labelTitle="카드 비밀번호">
        <input className="input-basic w-15" type="password" value="1" onChange={onChangePassword} />
        <input className="input-basic w-15" type="password" value="1" onChange={onChangePassword} />
        <input className="input-basic w-15" type="password" value="1" onChange={onChangePassword} />
        <input className="input-basic w-15" type="password" value="1" onChange={onChangePassword} />
      </Input>
    </>
  );
}

InformationInput.propTypes = {
  cardNumber: PropTypes.object,
  setCardNumber: PropTypes.func,
};

export default InformationInput;
