import React from 'react';
import Card from '../common/Card';
import PageTitle from '../common/PageTitle';

function CardListPage() {
  return (
    <div className="app">
      <PageTitle title="보유카드" />
      {/* 등록된 카드 map 돌리기 */}
      <Card isRegistered={true} />
      {/* 빈 카드 */}
      <Card isRegistered={false} />
    </div>
  );
}

export default CardListPage;
