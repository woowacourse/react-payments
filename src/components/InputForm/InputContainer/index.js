import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const InputContainer = ({ title, children }) => {
  const [ValidMessage, InputBody] = children;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ValidMessage>{ValidMessage}</Styled.ValidMessage>
      </Styled.Header>
      <Styled.Body>{InputBody}</Styled.Body>
    </Styled.Container>
  );
};

InputContainer.propTypes = {
  /**
   * InputContainer title
   */
  title: PropTypes.string,
};

InputContainer.defaultProps = {};
