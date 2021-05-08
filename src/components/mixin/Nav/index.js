import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './index.styles';

import { PageContext } from '../../../data/context/PageContext';
import { PAGE } from '../../../constants/constant';

const Nav = ({ children }) => {
  const { page, setPage } = useContext(PageContext);
  return (
    <NavWrapper>
      {page === PAGE.ADD_CARD && (
        <div
          className='back-button'
          onClick={() => setPage(PAGE.CARD_LIST)}
        ></div>
      )}

      <div className='nav-text'>{children}</div>
    </NavWrapper>
  );
};

Nav.propTypes = {
  children: PropTypes.string,
};

export default Nav;
