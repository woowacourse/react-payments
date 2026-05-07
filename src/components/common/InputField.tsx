import styled from "@emotion/styled";
import Input from "@/components/common/Input";
import type { ComponentProps } from "react";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import FieldLayout from "./FieldLayout";

interface InputFieldProps {
  title: string;
  caption?: string;
  label: string;
  inputPropsList: (ComponentProps<typeof Input> & { key: string })[];
  helperMessage?: string;
}

const InputField = ({
  title,
  caption,
  label,
  inputPropsList,
  helperMessage = "",
}: InputFieldProps) => {
  return (
    <FieldLayout
      titleComponent={<Title>{title}</Title>}
      captionComponent={caption && <Caption>{caption}</Caption>}
      helperMessageComponent={
        helperMessage && <HelperMessage>{helperMessage}</HelperMessage>
      }
    >
      <InputGroup>
        <Legend>{label}</Legend>
        <InputWrapper>
          {inputPropsList.map(({ key, ...inputProps }) => (
            <Input key={key} {...inputProps} />
          ))}
        </InputWrapper>
      </InputGroup>
    </FieldLayout>
  );
};

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: ${COLOR_PALETTE.CAPTION};
  margin-top: 0.25rem;
`;

const InputGroup = styled.fieldset`
  border: none;
  padding: 0;
  margin: 1rem 0 0;
  min-width: 0;
`;

const Legend = styled.legend`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${COLOR_PALETTE.LABEL};
  padding: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
`;

const HelperMessage = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  color: ${COLOR_PALETTE.ERROR};
`;

export default InputField;
