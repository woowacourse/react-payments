import { HTMLAttributes } from "react";
import styled from "styled-components";

interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  name: string;
  text: string;
}

export const InputLabel = ({ name, text }: InputLabelProps) => {
  return <Label htmlFor={name}>{text}</Label>;
};

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;
