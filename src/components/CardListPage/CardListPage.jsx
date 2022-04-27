import React from 'react';
import Card from '../common/Card';
import PageTitle from '../common/PageTitle';

function CardListPage({ setPage }) {
  const handleCardAdd = () => {
    setPage('addPage');
  };

  return (
    <div className="app">
      <PageTitle title="보유카드" />
      {/* 등록된 카드 map 돌리기 */}
      <Card isEmpty={false} />
      {/* 빈 카드 */}
      <Card isEmpty={true} handleCardAdd={handleCardAdd} />
    </div>
  );
}

export default CardListPage;
