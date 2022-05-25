import React from 'react';

import CardListContainer from 'containers/card/CardListContainer';
import PageTitle from 'components/navigater/PageTitle';

import { PageWrapper, TitleWrapper } from './stlye';

function CardListPage() {
  return (
    <PageWrapper>
      <TitleWrapper>
        <PageTitle>보유카드</PageTitle>
      </TitleWrapper>
      <CardListContainer />
    </PageWrapper>
  );
}

export default CardListPage;
