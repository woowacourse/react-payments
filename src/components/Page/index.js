import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const Page = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType, PropTypes.array]),
};

Page.defaultProps = {};
