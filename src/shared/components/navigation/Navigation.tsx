import React from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import PageTitle from './PageTitle';

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    return <div css={style}>카드 리스트</div>;
  }

  if (pathname === '/card-register-confirm') {
    return null;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div css={style}>
      <BackButton onClick={handleClick} />
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
