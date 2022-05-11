import React from 'react';
import CardList from '../CardList/CardList';
import CardButton from '../Common/Button/CardButton';
import { PageContext } from '../../context/index';
import { useContext } from 'react';
import { PAGE } from '../../constants';

function CardListPage() {
  const { setPage, tempRouter } = useContext(PageContext);

  return (
    <main className={tempRouter.cardList}>
      <h2 className="page-title">보유 카드</h2>
      <CardList>
        <div className="card-box" onClick={() => setPage(PAGE.ADD_CARD)}>
          <CardButton>+</CardButton>
        </div>
      </CardList>
    </main>
  );
}

export default CardListPage;
