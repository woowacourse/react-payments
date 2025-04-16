import { ReactNode } from 'react';
import styled from 'styled-components';

type inputType = '카드 번호' | '유효기간' | 'CVC';

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.p`
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

function BaseInputField({
  label,
  children,
  errorMessage,
}: {
  label: string;
  children: ReactNode;
  errorMessage?: string;
}) {
  return (
    <InputFieldContainer>
      <Label>{label}</Label>
      <InputWrapper>{children}</InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputFieldContainer>
  );
}

export default BaseInputField;
