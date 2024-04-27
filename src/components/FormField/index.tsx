import styled from "styled-components";

import InputTitle from "./InputTitle";
import InfoText from "./InfoText";
import InputContent from "./InputContent";
import Label from "./Label";

import { StaticPropsWithChildren } from "../../types/components";

const FormField = ({ children }: StaticPropsWithChildren) => {
  return <FieldContainer>{children}</FieldContainer>;
};

FormField.InputTitle = InputTitle;

FormField.InfoText = InfoText;

FormField.InputContent = InputContent;

FormField.Label = Label;

export default FormField;

const FieldContainer = styled.section`
  height: 137px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 16px;
`;
