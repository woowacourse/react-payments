import React from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';
import './FormCardAdd.css';
import passwordDotImg from '../asset/password_dot.png';
import cvcInfo from '../asset/cvc_info.png';
import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';

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
    fetchData(postData);
    navigate('/');
  };
  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <div>
        <span>카드 번호</span>
        <InputCardData
          value={cardNumber.value.first}
          onChange={cardNumber.onChange}
          status={cardNumber.status}
          className="example"
          errorMessage="잘못된 값"
          name="first"
        />
        <InputCardData
          value={cardNumber.value.second}
          onChange={cardNumber.onChange}
          status={cardNumber.status}
          className="example"
          errorMessage="잘못된 값"
          name="second"
        />
        <InputCardPassword
          value={cardNumber.value.third}
          onChange={cardNumber.onChange}
          status={cardNumber.status}
          errorMessage="잘못된 값"
          name="third"
          minDataLength={4}
          maxDataLength={4}
          width="100px"
        />
        <InputCardPassword
          value={cardNumber.value.fourth}
          onChange={cardNumber.onChange}
          status={cardNumber.status}
          errorMessage="잘못된 값"
          name="fourth"
          minDataLength={4}
          maxDataLength={4}
          width="100px"
        />
      </div>
      <div>
        <span>만료일</span>
        <InputCardData
          value={cardExpire.value}
          onChange={cardExpire.onChange}
          status={cardExpire.status}
          className="example"
          errorMessage="잘못된 값"
          name="expire"
        />
      </div>
      <div>
        <div className="card-owner-container-header">
          <span>카드 소유자 이름(선택)</span>
          <span>{cardOwner.value.length}/30</span>
        </div>
        <InputCardData
          value={cardOwner.value}
          onChange={cardOwner.onChange}
          status={cardOwner.status}
          className="example"
          errorMessage="잘못된 값"
          name="owner"
        />
      </div>
      <div className="card-security-code-container">
        <span>보안코드(CVC/CVV)</span>
        <div className="card-security-code-box">
          <InputCardPassword
            value={securityCode.value}
            onChange={securityCode.onChange}
            status={securityCode.status}
            errorMessage="잘못된 값"
            maxDataLength={3}
            minDataLength={3}
            width="84px"
          />
          <button>
            <img src={cvcInfo} alt="cvc_info" />
          </button>
        </div>
      </div>
      <div className="card-password-container">
        <span>카드 비밀번호</span>
        <div className="card-password-input-box">
          <InputCardPassword
            value={cardPassword1.value}
            onChange={cardPassword1.onChange}
            status={cardPassword1.status}
            errorMessage=""
            maxDataLength={1}
            minDataLength={1}
            width="45px"
          />
          <InputCardPassword
            value={cardPassword2.value}
            onChange={cardPassword2.onChange}
            status={cardPassword2.status}
            errorMessage=""
            maxDataLength={1}
            minDataLength={1}
            width="45px"
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
