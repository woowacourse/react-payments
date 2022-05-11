import React from 'react';
import PageTitle from 'components/navigater/PageTitle';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import BackButtonContainer from 'containers/button/BackButtonContainer';

const Wrapper = styled.nav(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',

  '& .margin': {
    marginRight: '14px',
  },
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
        <div className="margin">
          <BackButtonContainer />
        </div>
        <PageTitle>카드수정</PageTitle>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="margin">
        <BackButtonContainer />
      </div>
      <PageTitle>카드추가</PageTitle>
    </Wrapper>
  );
}

export default Navigation;
