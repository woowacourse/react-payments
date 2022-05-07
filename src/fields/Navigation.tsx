import React from 'react';
import BackButton from 'components/navigater/BackButton';
import PageTitle from 'components/navigater/PageTitle';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.nav(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',
}));

function Navigation() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <Wrapper>
        <PageTitle>보유카드</PageTitle>
      </Wrapper>
    );
  }

  if (pathname.includes('/card/edit/')) {
    return (
      <Wrapper>
        <BackButton />
        <PageTitle>카드수정</PageTitle>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>카드추가</PageTitle>
    </Wrapper>
  );
}

export default Navigation;
