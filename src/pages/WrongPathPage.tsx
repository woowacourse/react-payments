import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/navigater/PageTitle';

import { PageWrapper } from './style';

function WrongPathPage() {
  return (
    <PageWrapper>
      <PageTitle>잘못된 접근입니다.</PageTitle>
      <Link to="/card">홈페이지로 이동하기</Link>
    </PageWrapper>
  );
}

export default WrongPathPage;
