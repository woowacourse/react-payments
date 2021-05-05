import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const NickNameInputContainer = ({ nickName, autoFocus, handleChange }) => {
  return (
    <Styled.Container>
      <Styled.Input name={'nickName'} autoFocus={autoFocus} value={nickName} onChange={handleChange} />
    </Styled.Container>
  );
};

NickNameInputContainer.propTypes = {
  nickName: PropTypes.string,
  autoFocus: PropTypes.string,
  handleChange: PropTypes.func,
};

NickNameInputContainer.defaultProps = {};
