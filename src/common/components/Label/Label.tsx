import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

type LabelPropsType = ComponentPropsWithoutRef<"label"> & {
  children: ReactNode;
};

const Label = ({ children, ...rest }: LabelPropsType) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;
