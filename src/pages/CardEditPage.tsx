import React from 'react';

import CardContainer from 'containers/card/CardContainer';
import CardFormContainer from 'containers/card/CardFormContainer';
import TypeButtonModal from 'containers/modal/TypeButtonModalContainer';
import CardCompleteContainer from 'containers/card/CardCompleteContainer';
import BackButtonContainer from 'containers/button/BackButtonContainer';
import PageTitle from 'components/navigater/PageTitle';

import { useAppState } from 'hooks/hooks';

import { MarginWrapper, PageWrapper, TitleWrapper } from './style';

function CardEditPage() {
  const { completeCard, changeCardType } = useAppState();

  return (
    <PageWrapper>
      {changeCardType && <TypeButtonModal />}
      {completeCard ? (
        <CardCompleteContainer />
      ) : (
        <>
          <TitleWrapper>
            <BackButtonContainer />
            <MarginWrapper />
            <PageTitle>카드수정</PageTitle>
          </TitleWrapper>
          <CardContainer />
          <CardFormContainer />
        </>
      )}
    </PageWrapper>
  );
}

export default CardEditPage;
