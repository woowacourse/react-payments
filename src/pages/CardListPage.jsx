import React from 'react';
import Card from '../components/common/Card/Card';
import PageTitle from '../components/common/PageTitle/PageTitle';

function CardListPage({ setPage }) {
  const handleCardAdd = () => {
    setPage('addPage');
  };

  return (
    <div className="app">
      <PageTitle title="보유카드" />
      <Card isEmpty={true} handleCardAdd={handleCardAdd} />
    </div>
  );
}

export default CardListPage;
