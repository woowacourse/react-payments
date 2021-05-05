import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const CvcInputContainer = ({ cvc, isValid, type, maxLength, handleChange, handleBlur }) => {
  return (
    <>
      <Styled.Container onBlur={handleBlur} isValid={isValid}>
        <Styled.Input name={'cvc'} value={cvc} type={type} maxLength={maxLength} onChange={handleChange} />
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
