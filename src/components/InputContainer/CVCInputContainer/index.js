import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const CVCInputContainer = ({ cvc, handleChange }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Input value={cvc} onChange={handleChange} />
      </Styled.Container>
      <Styled.HelpSign>?</Styled.HelpSign>
    </>
  );
};

CVCInputContainer.propTypes = {
  cvc: PropTypes.string,
};

CVCInputContainer.defaultProps = {
  cvc: '111',
};
