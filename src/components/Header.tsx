import React from 'react';

import './Header.css';

type HeaderType = {
  children: React.ReactNode;
};
const Header = ({ children }: HeaderType) => {
  return <div className="page-header">{children}</div>;
};

export default React.memo(Header);
