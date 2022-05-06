import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTE } from '../../../route';
const pageTitle = {
  [ROUTE.home.route]: ROUTE.home.pageTitle,
  [ROUTE.addCard.route]: ROUTE.addCard.pageTitle,
  [ROUTE.cardList.route]: ROUTE.cardList.pageTitle,
};
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
      {pageTitle[pathname]}
    </h1>
  );
}

export default Header;
