import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Page = ({ children }) => {
  const [BodyComponent, HeaderComponent] = children;
  return (
    <Styled.Container>
      <Styled.Header>{HeaderComponent}</Styled.Header>
      <Styled.Body>{BodyComponent}</Styled.Body>
    </Styled.Container>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
