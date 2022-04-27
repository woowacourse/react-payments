import React, { useState } from 'react';
import Input from './Input';
import { isOverMaxLength, isOutOfRange } from '../util';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../constants';

function AddCardForm(props) {
  const [nameLength, setNameLength] = useState(0);

  const updateNameLength = (name) => {
    setNameLength(name.length);
  };

  return (
    <form>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
            validators={{ isOverMaxLength, isNaN: Number.isNaN }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
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
            min={RANGE.MONTH_MIN}
            max={RANGE.MONTH_MAX}
            validators={{ isOverMaxLength, isNaN: Number.isNaN, isOutOfRange }}
          />
          /
          <Input
            placeholder="YY"
            length={MAX_LENGTH.DATE}
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
          validators={{ isOverMaxLength }}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <Input
          size="w-25"
          type="password"
          length={MAX_LENGTH.SECURITY_CODE}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <Input
          size="w-15"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
        <Input
          size="w-15"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
        <Input
          size="w-15"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
        <Input
          size="w-15"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          validators={{ isOverMaxLength, isNaN: Number.isNaN }}
        />
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
