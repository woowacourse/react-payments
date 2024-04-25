import styled from "styled-components";

export interface FormSubmitButtonProps {
  disabled: boolean;
}

export default function FormSubmitButton({ disabled }: FormSubmitButtonProps) {
  if (disabled) {
    return;
  }
  return <SubmitButton>확인</SubmitButton>;
}

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border: none;
  background-color: rgba(51, 51, 51, 1);
  color: rgba(243, 243, 243, 1);
  font-size: 16px;
  font-weight: bold;
`;
