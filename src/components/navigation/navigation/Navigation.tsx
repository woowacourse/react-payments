import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../back-button/BackButton';
import PageTitle from '../PageTitle';
import SS from '../../styled';

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    return <SS.Navigation>카드 리스트</SS.Navigation>;
  }

  if (pathname === '/card-register-confirm') {
    return null;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <SS.Navigation>
      <BackButton onClick={handleClick} />
      <PageTitle>카드추가</PageTitle>
    </SS.Navigation>
  );
}

export default Navigation;
