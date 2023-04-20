import React from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';
import passwordDotImg from '../asset/password_dot.png';
import cvcInfo from '../asset/cvc_info.png';
import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import './FormCardAdd.css';

const FormCardAdd = ({
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: any) => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;

    const postData = {
      cardType: '현대',
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwner.value,
      expired: cardExpire.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    if (!fetchData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate('/');
  };
  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <div>
        <span className="form-label">카드 번호</span>
        <div className="card-number-input-container">
          <InputCardData
            value={cardNumber.value.first}
            onChange={cardNumber.onChange}
            className="card-number"
            name="first"
          />
          <span>-</span>
          <InputCardData
            value={cardNumber.value.second}
            onChange={cardNumber.onChange}
            className="card-number"
            name="second"
          />
          <span>-</span>
          <InputCardPassword
            value={cardNumber.value.third}
            onChange={cardNumber.onChange}
            name="third"
            minDataLength={4}
            maxDataLength={4}
            passwordType="card-number"
          />
          <span>-</span>
          <InputCardPassword
            value={cardNumber.value.fourth}
            onChange={cardNumber.onChange}
            name="fourth"
            minDataLength={4}
            maxDataLength={4}
            passwordType="card-number"
          />
        </div>
      </div>
      <div>
        <span className="form-label">만료일</span>
        <InputCardData
          value={cardExpire.value}
          onChange={cardExpire.onChange}
          className="card-expired"
          name="expire"
        />
      </div>
      <div>
        <div className="card-owner-container-header">
          <span className="form-label">카드 소유자 이름(선택)</span>
          <span className="form-label">{cardOwner.value.length}/30</span>
        </div>
        <InputCardData
          value={cardOwner.value}
          onChange={cardOwner.onChange}
          className="card-owner"
          name="owner"
        />
      </div>
      <div className="card-security-code-container">
        <span className="form-label">보안코드(CVC/CVV)</span>
        <div className="card-security-code-box">
          <InputCardPassword
            value={securityCode.value}
            onChange={securityCode.onChange}
            maxDataLength={3}
            minDataLength={3}
            passwordType="password-cvc"
          />
          <button>
            <img src={cvcInfo} alt="cvc_info" />
          </button>
        </div>
      </div>
      <div className="card-password-container">
        <span className="form-label">카드 비밀번호</span>
        <div className="card-password-input-box">
          <InputCardPassword
            value={cardPassword1.value}
            onChange={cardPassword1.onChange}
            maxDataLength={1}
            minDataLength={1}
            passwordType="password-single"
          />
          <InputCardPassword
            value={cardPassword2.value}
            onChange={cardPassword2.onChange}
            maxDataLength={1}
            minDataLength={1}
            passwordType="password-single"
          />
          <img src={passwordDotImg} alt="비밀번호" />
          <img src={passwordDotImg} alt="비밀번호" />
        </div>
      </div>
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default FormCardAdd;
