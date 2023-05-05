import React from 'react';

import './Header.css';

const Header = ({ children }: React.PropsWithChildren) => {
  return <div className="page-header">{children}</div>;
};

export default React.memo(Header);
