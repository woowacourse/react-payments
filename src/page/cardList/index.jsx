import CardPreview from 'components/CardPreview';
import Header from 'components/common/Header';
import { CRYPTO_STRING } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';

const mockCardInfo = {
  company: '클린카드',
  cardNumber: {
    first: '1111',
    second: '2222',
    third: '3333',
    fourth: '4444',
  },
  expiryDate: {
    month: '12',
    year: '23',
  },
  ownerName: 'lokba',
  privacyCode: '123',
  password: {
    first: '1',
    second: '1',
    third: CRYPTO_STRING,
    fourth: CRYPTO_STRING,
  },
  theme: 'red',
};

const CardListPage = () => {
  return (
    <div>
      <Header title="보유 카드 목록" />
      <div className="card-list mt-10">
        <div className="flex-column-center">
          <CardPreview cardInfo={mockCardInfo} isVisibleButton="hide" theme="red" />
          <span className="text-center">법인카드</span>
        </div>

        {/* 카드 추가하는 페이지*/}
        <div className="card-item">
          <div className="card-box">
            <Link to="/add" className="empty-card">
              <div className="card-add-button">+</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListPage;
