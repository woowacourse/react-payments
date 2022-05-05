import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const width = {
  xs: "85px",
  sm: "135px",
  "almost-full": "80%",
  full: "100%",
};

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
  color: ${(props) =>
    props.state === "error"
      ? "#d82424"
      : props.state === "complete"
      ? "#04c09e"
      : "#525252"};
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
  background: ${(props) => props.shape === "box" && "#ecebf1"};
  border-bottom: ${(props) =>
    props.shape === "underline" && "1px solid #000000"};
  border-radius: ${(props) => props.shape === "box" && "7px"};
  width: ${(props) => width[props.width]};
  padding: 12px;
  margin: ${(props) => props.width === "almost-full" && "auto"};

  box-shadow: ${(props) => props.isInvalid && "inset 0 0 0 1px #d82424"};
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
  isInvalid,
  shape,
}) {
  return (
    <StyledInputField>
      <StyledLabel
        state={isInvalid ? "error" : isComplete ? "complete" : "default"}
      >
        {labelText}
        <span className="error-message">{errorMessage}</span>
      </StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper
          width={wrapperWidth}
          align={horizontalAlign}
          isInvalid={isInvalid}
          shape={shape}
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
  shape: PropTypes.oneOf(["box", "underline"]),
  wrapperWidth: PropTypes.oneOf(["xs", "sm", "almost-full", "full"]),
  horizontalAlign: PropTypes.oneOf(["flex-start", "center", "space-around"]),
};

InputField.defaultProps = {
  shape: "box",
};
