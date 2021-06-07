import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const InputContainer = ({
  title,
  validMessage,
  inputValue,
  textLength,
  isVisibleTextLength,
  children,
}) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {validMessage && (
          <Styled.ValidMessage>
            <Styled.MessageBar>
              <Styled.Message>{validMessage}</Styled.Message>
              {isVisibleTextLength && (
                <Styled.InputLength>{`${inputValue.length}/${textLength}`}</Styled.InputLength>
              )}
            </Styled.MessageBar>
          </Styled.ValidMessage>
        )}
      </Styled.Header>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Container>
  );
};

InputContainer.propTypes = {
  title: PropTypes.string,
  validMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  inputValue: PropTypes.string,
  textLength: PropTypes.number,
  isVisibleTextLength: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
  ]),
};
