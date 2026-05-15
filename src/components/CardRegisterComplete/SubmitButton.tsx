import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
`;

interface SubmitButtonProps {
  isCardFormComplete: boolean;
}

export function SubmitButton(props: SubmitButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/react-payments/success");
  };

  if (!props.isCardFormComplete) return null;
  return <Button onClick={handleClick}>확인</Button>;
}
