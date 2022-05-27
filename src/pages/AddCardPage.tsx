import React from 'react';

import CardContainer from 'containers/card/CardContainer';
import CardFormContainer from 'containers/card/CardFormContainer';
import CardCompleteContainer from 'containers/card/CardCompleteContainer';
import TypeButtonModal from 'containers/modal/TypeButtonModalContainer';
import BackButtonContainer from 'containers/button/BackButtonContainer';
import PageTitle from 'components/navigater/PageTitle';

import { useAppState } from 'hooks';

import { MarginWrapper, PageWrapper, TitleWrapper } from './style';

function AddCardPage() {
  const { completeCard, changeCardType } = useAppState();

  if (completeCard) {
    return (
      <PageWrapper>
        <CardCompleteContainer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {changeCardType && <TypeButtonModal />}
      <TitleWrapper>
        <BackButtonContainer />
        <MarginWrapper marginRight="20px" />
        <PageTitle>카드추가</PageTitle>
      </TitleWrapper>
      <CardContainer />
      <CardFormContainer />
    </PageWrapper>
  );
}

export default AddCardPage;
