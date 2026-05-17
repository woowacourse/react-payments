import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function SendButton() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => navigate("/react-payments/enrollment")}
      >
        확인
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  margin: 0 -20px -20px -20px;
  position: sticky;
  bottom: -20px;
  order: 999;
  margin-top: auto;
  z-index: 10;
`;

const Button = styled.button`
  padding: 20px;
  background-color: black;
  color: white;
  width: 100%;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;
