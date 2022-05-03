import { css } from '@emotion/react';
import React from 'react';
import BackButton from '../atoms/BackButton';
import PageTitle from '../atoms/PageTitle';

function Navigation() {
  return (
    <div css={style}>
      <BackButton />
      <PageTitle>카드추가</PageTitle>
    </div>
  );
}

const style = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
});

export default Navigation;
