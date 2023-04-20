import React from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';
import './FormCardAdd.css';
import passwordDotImg from '../asset/password_dot.png';
import cvcInfo from '../asset/cvc_info.png';
import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';

const FormCardAdd = ({
  cardNumberData,
  cardExpireData,
  cardOwnerData,
  securityCodeData,
  cardPassword1Data,
  cardPassword2Data,
}: any) => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumberData.value;

    const postData = {
      cardType: '현대',
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwnerData.value,
      expired: cardExpireData.value,
      securityCode: securityCodeData.value,
      cardPassword: {
        first: cardPassword1Data.value,
        second: cardPassword2Data.value,
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
          value={cardNumberData.value.first}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="잘못된 값"
          name="first"
        />
        <InputCardData
          value={cardNumberData.value.second}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="잘못된 값"
          name="second"
        />
        <InputCardPassword
          value={cardNumberData.value.third}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          errorMessage="잘못된 값"
          name="third"
          maxDataLength={4}
          width="100px"
        />
        <InputCardPassword
          value={cardNumberData.value.fourth}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          errorMessage="잘못된 값"
          name="fourth"
          maxDataLength={4}
          width="100px"
        />
      </div>
      <div>
        <span>만료일</span>
        <InputCardData
          value={cardExpireData.value}
          onChange={cardExpireData.onChange}
          status={cardExpireData.status}
          className="example"
          errorMessage="잘못된 값"
          name="expire"
        />
      </div>
      <div>
        <div className="card-owner-container-header">
          <span>카드 소유자 이름(선택)</span>
          <span>{cardOwnerData.value.length}/30</span>
        </div>
        <InputCardData
          value={cardOwnerData.value}
          onChange={cardOwnerData.onChange}
          status={cardOwnerData.status}
          className="example"
          errorMessage="잘못된 값"
          name="owner"
        />
      </div>
      <div className="card-security-code-container">
        <span>보안코드(CVC/CVV)</span>
        <div className="card-security-code-box">
          <InputCardPassword
            value={securityCodeData.value}
            onChange={securityCodeData.onChange}
            status={securityCodeData.status}
            errorMessage="잘못된 값"
            maxDataLength={3}
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
            value={cardPassword1Data.value}
            onChange={cardPassword1Data.onChange}
            status={cardPassword1Data.status}
            errorMessage=""
            maxDataLength={1}
            width="45px"
          />
          <InputCardPassword
            value={cardPassword2Data.value}
            onChange={cardPassword2Data.onChange}
            status={cardPassword2Data.status}
            errorMessage=""
            maxDataLength={1}
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
