import React from 'react';
import { css } from '@emotion/react';
import Navigation from 'fields/Navigation';
import CardListContainer from 'containers/card/CardListContainer';

const style = css({
  width: '375px',
  height: '675px',
  overflow: 'scroll',
  margin: '0 auto',
  padding: '22px 28px 16px 28px',
  backgroundColor: '#ffffff',
});

function CardListPage() {
  return (
    <div css={style}>
      <Navigation />
      <CardListContainer />
    </div>
  );
}

export default CardListPage;
