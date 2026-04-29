import styled from "@emotion/styled";
import Input from "./Input.tsx";
import type { ComponentProps } from "react";

interface InputFieldProps {
  title: string;
  caption?: string;
  label: string;
  inputPropsList: ComponentProps<typeof Input>[];
}

const InputField = ({
  title,
  caption,
  label,
  inputPropsList,
}: InputFieldProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {caption && <Caption>{caption}</Caption>}
      <Label>{label}</Label>
      <InputWrapper>
        {inputPropsList.map((inputProps) => (
          <Input {...inputProps} />
        ))}
      </InputWrapper>
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: #8b95a1;
  margin-top: 0.25rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0a0d13;
  margin-top: 1rem;
`;

export default InputField;
