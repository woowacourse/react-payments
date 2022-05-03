import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  color: ${(props) => (props.isComplete ? "#04c09e" : "#525252")};
  letter-spacing: -0.085em;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props) => props.width};
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledErrorMessage = styled.span`
  margin-left: 4px;
  font-size: 11px;
  color: #f38181;
`;

export default function InputField({
  labelText,
  children,
  wrapperWidth,
  horizontalAlign,
  isComplete,
  errorMessage,
  OptionalComponent,
  splitCount,
}) {
  const InputChildren = splitCount ? (
    children.map((inputComponent, index) => (
      <StyledInputWrapper
        key={index}
        width={`calc(${wrapperWidth} / ${splitCount})`}
        align={horizontalAlign}
      >
        {inputComponent}
      </StyledInputWrapper>
    ))
  ) : (
    <StyledInputWrapper width={wrapperWidth} align={horizontalAlign}>
      {children}
    </StyledInputWrapper>
  );

  return (
    <StyledInputField>
      <StyledLabel isComplete={isComplete}>
        {labelText}
        {!isComplete && (
          <StyledErrorMessage>{`(${errorMessage})`}</StyledErrorMessage>
        )}
      </StyledLabel>
      <StyledInputContainer>
        {InputChildren}
        {OptionalComponent}
      </StyledInputContainer>
    </StyledInputField>
  );
}

InputField.propTypes = {
  labelText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  wrapperWidth: PropTypes.string,
  horizontalAlign: PropTypes.oneOf(["flex-start", "center", "space-around"]),
};
