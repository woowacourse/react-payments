import React from 'react';
import styled from '@emotion/styled';
import Navigation from 'fields/Navigation';
import CardContainer from 'containers/card/CardContainer';
import CardFormContainer from 'containers/card/CardFormContainer';
import TypeButtonModal from 'containers/modal/TypeButtonModalContainer';
import { useAppState } from 'hooks/hooks';
import CardCompleteContainer from 'containers/card/CardCompleteContainer';

const Wrapper = styled.div(() => ({
  width: '375px',
  height: '675px',
  margin: '0 auto',
  padding: '22px 28px 16px 28px',
  position: 'relative',
  backgroundColor: '#ffffff',
}));

function CardEditPage() {
  const { completeCard, chageCardType } = useAppState();

  return (
    <Wrapper>
      {chageCardType ? <TypeButtonModal /> : <></>}
      <Navigation />
      {completeCard ? (
        <>
          <CardCompleteContainer />
        </>
      ) : (
        <>
          <CardContainer />
          <CardFormContainer />
        </>
      )}
    </Wrapper>
  );
}

export default CardEditPage;
