import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import CheckBtn from "../components/button/CheckBtn";

export default function CardComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const { first, cardFirmLabel } = location.state;

  return (
    <CompleteStyle>
      <Content>
        <IMG src="./checkImg.svg" />
        <Message>
          {first}로 시작하는 <br />
          {cardFirmLabel}가 등록되었어요.
        </Message>
      </Content>
      <CheckBtn onClick={() => navigate("/", { state: { reset: true } })} />
    </CompleteStyle>
  );
}

const CompleteStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  width: 376px;
  height: 100vh;
  margin: 0 auto;
  gap: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const IMG = styled.img`
  width: 76px;
  height: 76px;
`;

const Message = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`;
