import React, { useState } from 'react';
import Input from './Input';

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
          <Input length={4} />
          <Input length={4} />
          <Input type="password" length={4} />
          <Input type="password" length={4} />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <Input placeholder="MM" length={2} />
          /
          <Input placeholder="YY" length={2} />
        </div>
      </div>
      <div className="input-container">
        <div className="owner-name-wrapper">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">{nameLength}/30</span>
        </div>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          length={30}
          minLength={2}
          updateNameLength={updateNameLength}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <Input size="w-25" type="password" length={3} />
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <Input size="w-15" type="password" length={1} />
        <Input size="w-15" type="password" length={1} />
        <Input size="w-15" type="password" length={1} />
        <Input size="w-15" type="password" length={1} />
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
