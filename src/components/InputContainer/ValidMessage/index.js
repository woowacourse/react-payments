import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const ValidMessage = ({ validMessage, inputValue, textLength, isVisibleTextLength }) => {
  return (
    <Styled.MessageBar>
      <Styled.Message>{validMessage}</Styled.Message>
      {isVisibleTextLength && (
        <Styled.InputLength>{`${inputValue.length}/${textLength}`}</Styled.InputLength>
      )}
    </Styled.MessageBar>
  );
};

ValidMessage.propTypes = {
  validMessage: PropTypes.string,
  inputValue: PropTypes.string,
  textLength: PropTypes.number,
  isVisibleTextLength: PropTypes.bool,
};

ValidMessage.defaultProps = {
  validMessage: '값을 입력해주세요.',
  isVisibleTextLength: false,
};
