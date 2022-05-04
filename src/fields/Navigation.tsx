import React from 'react';
import { css } from '@emotion/react';
import BackButton from 'components/navigater/BackButton';
import PageTitle from 'components/navigater/PageTitle';

const style = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
});

function Navigation() {
  return (
    <div css={style}>
      <BackButton />
      <PageTitle>카드추가</PageTitle>
    </div>
  );
}

export default Navigation;
