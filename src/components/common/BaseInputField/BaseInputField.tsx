import styled from 'styled-components';
import { StrictPropsWithChildren } from '../../../types/props';

interface BaseInputFieldProps {
  label: string;
  errorMessage?: string;
}

function BaseInputField({
  label,
  children,
  errorMessage,
}: StrictPropsWithChildren<BaseInputFieldProps>) {
  return (
    <InputFieldContainer>
      <Label>{label}</Label>
      <InputWrapper>{children}</InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputFieldContainer>
  );
}

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
export default BaseInputField;
