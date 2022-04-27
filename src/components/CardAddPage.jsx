import React from 'react';
import Card from './Card';
import PageTitle from './PageTitle';
import CardNumber from './CardNumber';
import CardExpirationDate from './CardAddPage/CardAddPageComponents/CardExpirationDate';
import CardOwner from './CardOwner';
import CVC from './CVC';
import CardPassword from './CardPassword';
import NextPageButton from './NextPageButton';
import PrevPageButton from './PrevPageButton';

function CardAddPage(props) {
  return (
    <div className="app">
      <PrevPageButton />
      <PageTitle />
      <Card />
      {/* 카드 번호  */}
      <CardNumber />
      {/* 만료일 */}
      <CardExpirationDate />
      {/* 카드 소유자 이름 */}
      <CardOwner />
      {/* 보안 코드  */}
      <CVC />
      {/* 카드 비밀번호 */}
      <CardPassword />
      {/* 다음 버튼  */}
      <NextPageButton />
    </div>
  );
}

export default CardAddPage;
