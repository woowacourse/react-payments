import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CardAddIcon } from 'assets/card_add_icon.svg';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="card-list">
        <div className="card-items"></div>
        <Link to="/react-payments/add">
          <CardAddIcon className="card-add-icon" />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
