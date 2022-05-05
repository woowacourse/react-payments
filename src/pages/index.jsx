import React from 'react';
import Header from '../components/commons/Header';
import PropTypes from 'prop-types';
function Page({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};
export default Page;
