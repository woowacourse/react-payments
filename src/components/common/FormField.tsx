import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { COLOR_PALETTE } from "@/styles/colorPalette";

interface FormFieldProps {
  title: string;
  caption?: string;
  label: string;
  helperMessage?: string;
  children: ReactNode;
}

const FormField = ({
  title,
  caption,
  label,
  helperMessage = "",
  children,
}: FormFieldProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {caption && <Caption>{caption}</Caption>}
      <Fieldset>
        <Legend>{label}</Legend>
        <FieldContent>{children}</FieldContent>
      </Fieldset>

      <HelperMessage>{helperMessage}</HelperMessage>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
`;

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

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
`;

const Legend = styled.legend`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${COLOR_PALETTE.LABEL};
  margin-top: 1rem;
`;

const FieldContent = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
`;

const HelperMessage = styled.p`
  margin: 0.75rem 0 0;
  min-height: 0.75rem;
  font-weight: 400;
  font-size: 0.6rem;
  color: ${COLOR_PALETTE.ERROR};
`;

export default FormField;
