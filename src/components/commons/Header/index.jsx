import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_TITLE, ROUTE } from '../../../route';

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    // if (pathname !== ROUTE.home.route) {
    //   navigate(-1);
    //   return;
    // }
    navigate('..', { replace: true });
  };

  return (
    <h1 className="page-title" onClick={onClick}>
      {ROUTE.home.route !== pathname && '<'}
      &nbsp;
      {PAGE_TITLE[pathname]}
    </h1>
  );
}

export default Header;
