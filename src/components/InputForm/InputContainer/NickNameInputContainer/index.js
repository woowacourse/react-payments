import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const NickNameInputContainer = ({ nickName, handleChange }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Input name={'nickName'} value={nickName} onChange={handleChange} />
      </Styled.Container>
    </>
  );
};

NickNameInputContainer.propTypes = {
  nickName: PropTypes.string,
};

NickNameInputContainer.defaultProps = {};
