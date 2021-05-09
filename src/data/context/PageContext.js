import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PAGE } from '../../constants/constant';

export const PageContext = React.createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(PAGE.CARD_LIST);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

PageProvider.propTypes = {
  children: PropTypes.node,
};
