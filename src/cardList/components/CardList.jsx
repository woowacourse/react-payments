import React from 'react';

function CardList() {
  return (
    <>
      <div className="header-wrapper">
        <h2 className="page-title">보유 카드</h2>
      </div>
      <div className="app flex-column-center">
        <div className="card-box">
          <div className="small-card">
            <div className="card-top">
              <span className="card-text">클린카드</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip" />
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">YUJO</span>
                <span className="card-text">12 / 23</span>
              </div>
            </div>
          </div>
        </div>
        <span className="card-nickname">법인카드</span>
        <div className="card-box">
          <div className="empty-card">+</div>
        </div>
      </div>
    </>
  );
}

export default CardList;
