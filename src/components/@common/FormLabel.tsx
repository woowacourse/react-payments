import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
  htmlFor?: string;
}

function FormLabel({ children, htmlFor }: Props) {
  return <StyleLabel htmlFor={htmlFor}>{children}</StyleLabel>;
}

export default FormLabel;

const StyleLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
