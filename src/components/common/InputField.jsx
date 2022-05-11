import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  color: #525252;
  letter-spacing: -0.085em;

  ${({ isComplete }) =>
    isComplete &&
    `
    color: #04c09e;
  `}
`;

const StyledErrorMessage = styled.span`
  margin-left: 10px;
  color: red;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.align};
  background: #ecebf1;
  border-radius: 7px;
  width: ${props => props.width};
  padding: 12px;

  ${({ isComplete }) =>
    isComplete &&
    `
    box-shadow: inset 0 0 2px #04c09e;
  `}

  ${({ isError }) =>
    isError &&
    `
    box-shadow: inset 0 0 2px red;
  `}
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function InputField({
  labelText,
  wrapperWidth,
  horizontalAlign,
  isComplete,
  isError,
  errorMessage,
  separateEachInput,

  children,
}) {
  return (
    <StyledInputField>
      <StyledLabel isComplete={isComplete}>
        {labelText}
        {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </StyledLabel>
      <StyledInputContainer>
        {separateEachInput ? (
          React.Children.toArray(children).map((child, index) => (
            <StyledInputWrapper
              key={index}
              width={wrapperWidth}
              align={horizontalAlign}
              isComplete={isComplete}
              isError={isError}>
              {child}
            </StyledInputWrapper>
          ))
        ) : (
          <StyledInputWrapper width={wrapperWidth} align={horizontalAlign} isComplete={isComplete} isError={isError}>
            {children}
          </StyledInputWrapper>
        )}
      </StyledInputContainer>
    </StyledInputField>
  );
}

InputField.propTypes = {
  labelText: PropTypes.string,
  wrapperWidth: PropTypes.string,
  horizontalAlign: PropTypes.oneOf(['flex-start', 'center', 'space-around']),
  isComplete: PropTypes.bool,
  isError: PropTypes.bool,
  separateEachInput: PropTypes.bool,
};

InputField.defaultProps = {
  isComplete: false,
  isError: false,
  separateEachInput: false,
};
