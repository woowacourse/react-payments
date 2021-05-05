import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Page = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
