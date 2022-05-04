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
  ${props =>
    props.isComplete &&
    `
    color: #04c09e;
  `}
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.align};
  background: #ecebf1;
  border-radius: 7px;
  width: ${props => props.width};
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function InputField({
  labelText,
  OptionalComponent,
  wrapperWidth,
  horizontalAlign,
  isComplete,
  separateEachInput,

  children,
}) {
  return (
    <StyledInputField>
      <StyledLabel isComplete={isComplete}>{labelText}</StyledLabel>
      <StyledInputContainer>
        {separateEachInput ? (
          React.Children.toArray(children).map((child, index) => (
            <StyledInputWrapper key={index} width={wrapperWidth} align={horizontalAlign}>
              {child}
            </StyledInputWrapper>
          ))
        ) : (
          <StyledInputWrapper width={wrapperWidth} align={horizontalAlign}>
            {children}
          </StyledInputWrapper>
        )}
        {OptionalComponent}
      </StyledInputContainer>
    </StyledInputField>
  );
}

InputField.propTypes = {
  labelText: PropTypes.string,
  wrapperWidth: PropTypes.string,
  horizontalAlign: PropTypes.oneOf(['flex-start', 'center', 'space-around']),
  separateEachInput: PropTypes.bool,
  isComplete: PropTypes.bool,
};

InputField.defaultProps = {
  separateEachInput: false,
  isComplete: false,
};
