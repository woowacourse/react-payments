import React from "react";
import styled from "styled-components";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
}

const Label = ({ labelText, htmlFor }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{labelText}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  margin-top: 16px;

  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

  color: #0a0d13;
`;
