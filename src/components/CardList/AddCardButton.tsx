import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
export default function AddCardButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/register")}>+카드 추가</Button>;
}

const Button = styled.button`
  background-color: #ffffff;
  width: 320px;
  height: 40px;
  border-radius: 5px;
  border: 1px dashed #e6e6e6;
  box-sizing: border-box;
  padding: 12px 16px;
  font-size: 13px;
  font-family: sans-serif;
  color: #e6e6e6;
  cursor: pointer;
`;
