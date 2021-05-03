import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './index.styles';

const Nav = ({ onClickBackButton, children }) => {
  return (
    <NavWrapper>
      {onClickBackButton && (
        <div className='back-button' onClick={onClickBackButton}></div>
      )}

      <div className='nav-text'>{children}</div>
    </NavWrapper>
  );
};

Nav.propTypes = {
  onClickBackButton: PropTypes.func,
  children: PropTypes.string,
};

export default Nav;
