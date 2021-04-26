import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const CvcInputContainer = ({ cvc, handleChange }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Input name={'cvc'} value={cvc} onChange={handleChange} />
      </Styled.Container>
      <Styled.HelpSign>?</Styled.HelpSign>
    </>
  );
};

CvcInputContainer.propTypes = {
  cvc: PropTypes.string,
};

CvcInputContainer.defaultProps = {
  cvc: '111',
};
