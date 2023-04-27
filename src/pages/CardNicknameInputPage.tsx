import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import './CardNicknameInputPage.css';

const CardNicknameInputChange = () => {
  const navigate = useNavigate();

  const onSubmitButton = () => {
    navigate('/');
  };

  const mockData = {
    cardType: 'string',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'string',
    expired: 'string',
  };
  return (
    <>
      <div className="input-nickname-box">
        <div className="nickname-box-main-font">카드 등록이 완료되었습니다.</div>
        <div className="card-box">
          <Card
            cardType={mockData.cardType}
            cardNumber={mockData.cardNumber}
            cardOwner={mockData.cardOwner}
            expired={mockData.expired}
          />
        </div>
        <input className="nickname-input" autoFocus type="text" maxLength={10} />

        <button onClick={onSubmitButton} className="card-submit-button" type="button">
          확인
        </button>
      </div>
    </>
  );
};

export default CardNicknameInputChange;
