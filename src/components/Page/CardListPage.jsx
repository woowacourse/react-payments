import React from 'react';
import CardList from '../CardList/CardList';
import { PageContext } from '../../context/index';
import { useContext } from 'react';
import { PAGE } from '../../constants';

function CardListPage() {
  const { setPage, tempRouter } = useContext(PageContext);

  return (
    <div className={tempRouter.cardList}>
      <h2 className="page-title">보유 카드</h2>
      <CardList>
        <button className="card-button-box" onClick={() => setPage(PAGE.ADD_CARD)}>
          <div className="empty-card">
            <p className="card-add">+</p>
          </div>
        </button>
      </CardList>
    </div>
  );
}

export default CardListPage;
