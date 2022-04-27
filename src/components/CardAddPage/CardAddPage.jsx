import React from 'react';

import Card from '../common/Card';
import PageTitle from '../common/PageTitle';
import NextPageButton from '../common/NextPageButton';

import CardNumber from './CardAddPageComponents/CardNumber';
import CardExpirationDate from './CardAddPageComponents/CardExpirationDate';
import CardOwner from './CardAddPageComponents/CardOwner';
import CVC from './CardAddPageComponents/CVC';
import CardPassword from './CardAddPageComponents/CardPassword';
import PrevPageButton from './CardAddPageComponents/PrevPageButton';

function CardAddPage(props) {
  return (
    <div className="app">
      <PrevPageButton />
      <PageTitle title="카드추가" />
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
