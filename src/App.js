import React from 'react';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> 카드 추가 </h2>
        <Card cardNumber="1111-2222-3333-4444" expirationDate="08/17" ownerName="Harry"></Card>
        <Input labelTitle="카드번호">
          <div className="input-box">
            <input className="input-basic" type="text" value="1111" />
            <input className="input-basic" type="text" value="2222" />
            <input className="input-basic" type="password" value="1111" />
            <input className="input-basic" type="password" value="1111" />
          </div>
        </Input>
        <Input labelTitle="만료일" hasBox>
          <div className="input-box w-50">
            <input className="input-basic" type="text" placeholder="MM" value="12" />
            <input className="input-basic" type="text" placeholder="YY" value="23" />
          </div>
        </Input>
        <Input labelTitle="카드 소유자 이름(선택)">
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </Input>
        <Input labelTitle="보안코드(CVC/CVV)">
          <input className="input-basic w-25" type="password" value="111" />
        </Input>
        <Input labelTitle="카드 비밀번호">
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
        </Input>
        {/* 
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
          <input className="input-basic w-15" type="password" value="1" />
        </div>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div> */}
      </div>
    </div>
  );
}

export default App;
