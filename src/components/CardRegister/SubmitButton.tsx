import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Button = styled.button`
  background: #333333;
  width: 100%;
  height: 52px;
  top: 648px;
  left: 1px;
  gap: 10px;
  angle: 0 deg;
  opacity: 1;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f3f3f3;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const ButtonSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #f3f3f3;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 0 auto;
`;

interface SubmitButtonProps {
  isCardFormComplete: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export function SubmitButton({
  isCardFormComplete,
  isSubmitting,
  onSubmit,
}: SubmitButtonProps) {
  if (!isCardFormComplete) return null;
  return (
    <Button onClick={onSubmit} disabled={isSubmitting}>
      {isSubmitting ? <ButtonSpinner /> : "확인"}
    </Button>
  );
}
