import styled from "styled-components";

interface FormSubmitButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FormSubmitButton({ onClick }: FormSubmitButtonProps) {
  return <SubmitButton onClick={onClick}>확인</SubmitButton>;
}

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px 0;
  border: none;
  background-color: rgba(51, 51, 51, 1);
  color: rgba(243, 243, 243, 1);
  font-size: 16px;
  font-weight: bold;
`;
