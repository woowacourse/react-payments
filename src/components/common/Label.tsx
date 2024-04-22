import React from "react";
import styled from "styled-components";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  color: #0a0d13;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
`;
