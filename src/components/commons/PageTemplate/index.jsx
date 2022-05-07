import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
function PageTemplate({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node,
};
export default PageTemplate;
