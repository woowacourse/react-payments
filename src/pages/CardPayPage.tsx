import React from 'react';

import CardListContainer from 'containers/card/CardListContainer';

import { PageWrapper, TitleWrapper } from './style';

function CardPayPage() {
  return (
    <PageWrapper>
      <TitleWrapper>KYOUL PAY | 결제</TitleWrapper>
      <CardListContainer></CardListContainer>
    </PageWrapper>
  );
}

export default CardPayPage;
