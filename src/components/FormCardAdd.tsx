import React from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';
import './FormCardAdd.css';

const FormCardAdd = ({
  cardNumberData,
  cardExpireData,
  cardOwnerData,
  securityCodeData,
  cardPassword1Data,
  cardPassword2Data,
}: any) => {
  return (
    <form className="add-card-form">
      <div>
        <span>카드 번호</span>
        <InputCardData
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="잘못된 값"
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
        />
      </div>
      <div>
        <span>보안코드(CVC/CVV)</span>
        <InputCardPassword
          value={securityCodeData.value}
          onChange={securityCodeData.onChange}
          status={securityCodeData.status}
          className="example"
          errorMessage="잘못된 값"
          maxDataLength={3}
        />
        {/* 물음표 버튼 */}
      </div>
      <div>
        <span>카드 비밀번호</span>
        <InputCardPassword
          value={cardPassword1Data.value}
          onChange={cardPassword1Data.onChange}
          status={cardPassword1Data.status}
          className="example"
          errorMessage="잘못된 값"
          maxDataLength={1}
        />
        <InputCardPassword
          value={cardPassword2Data.value}
          onChange={cardPassword2Data.onChange}
          status={cardPassword2Data.status}
          className="example"
          errorMessage="잘못된 값"
          maxDataLength={1}
        />
        {/* ... 이미지 */}
      </div>
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default FormCardAdd;
