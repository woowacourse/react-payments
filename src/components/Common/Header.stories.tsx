import React from 'react';
import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Header',
  component: Header,
};

export function InListPage() {
  return <Header title="보유카드" />;
}

export function InRegisterPage() {
  return <Header title="카드 추가" onClickBack={() => {}} />;
}
