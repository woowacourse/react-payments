import { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseInputFieldProps {
  label: string;
  children: ReactNode;
  errorMessage?: string;
}

function BaseInputField({
  label,
  children,
  errorMessage,
}: BaseInputFieldProps) {
  return (
    <InputFieldContainer>
      <fieldset>
        <Legend>{label}</Legend>
        <InputWrapper>{children}</InputWrapper>
      </fieldset>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputFieldContainer>
  );
}

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Legend = styled.legend`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  min-height: 14px;
  font-weight: 400;
  font-size: 9.5px;
  color: #ff3d3d;
`;
export default BaseInputField;
