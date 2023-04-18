import React from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';

const FormCardAdd = ({
  cardNumberData,
  cardExpireData,
  cardOwnerData,
  securityCodeData,
  cardPaswordData,
}: any) => {
  return (
    <form>
      <div>
        <span>카드 번호</span>
        <InputCardData
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
        />
      </div>
      <div>
        <span>만료일</span>
        <InputCardData
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
        />
      </div>
      <div>
        <span>카드 소유자 이름(선택)</span>
        <span>0/30</span>
        <InputCardData
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
        />
      </div>
      <div>
        <span>보안코드(CVC/CVV)</span>
        <InputCardPassword
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
          maxDataLength={3}
        />
        {/* 물음표 버튼 */}
      </div>
      <div>
        <span>카드 비밀번호</span>
        <InputCardPassword
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
          maxDataLength={1}
        />
        <InputCardPassword
          value={cardNumberData.value}
          onChange={cardNumberData.onChange}
          status={cardNumberData.status}
          className="example"
          errorMessage="asdfasfas"
          maxDataLength={1}
        />
        {/* ... 이미지 */}
      </div>
      <button type="submit">다음</button>
    </form>
  );
};

export default FormCardAdd;
