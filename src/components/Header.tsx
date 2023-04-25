import React from 'react';

import './Header.css';

type HeaderType = {
  headerTitle: string;
  clickHandler?: () => void;
};
const Header = ({ headerTitle, clickHandler }: HeaderType) => {
  return (
    <header className="page-header">
      {clickHandler ? (
        <button className="back-button" onClick={clickHandler}>
          {'<'}
        </button>
      ) : (
        ''
      )}
      <h3 className="add-card-page-header-title">{headerTitle}</h3>
    </header>
  );
};

export default Header;
