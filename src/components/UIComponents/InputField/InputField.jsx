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

  display: flex;
  gap: 10px;

  .error-message {
    color: #d82424;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props) => props.width};
  padding: 12px;

  box-shadow: ${(props) => props.hasError && "inset 0 0 0 1px #d82424"};
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function InputField({
  labelText,
  children,
  OptionalComponent,
  wrapperWidth,
  horizontalAlign,
  isComplete,
  errorMessage,
}) {
  return (
    <StyledInputField>
      <StyledLabel isComplete={isComplete}>
        {labelText}
        <span className="error-message">{errorMessage}</span>
      </StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper
          width={wrapperWidth}
          align={horizontalAlign}
          hasError={errorMessage !== ""}
        >
          {children}
        </StyledInputWrapper>
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
