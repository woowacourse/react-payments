import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  color: #525252;
  letter-spacing: -0.085em;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  background: #ecebf1;
  border-radius: 7px;
  width: max-content;
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function InputField({ labelText, children, OptionalComponent }) {
  return (
    <StyledInputField>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper>{children}</StyledInputWrapper>
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
};

InputField.defaultProps = {
  labelText: "sample label",
};
