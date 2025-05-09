import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../shared/button/ui/Button";

import styled from "styled-components";

export default function Complete() {
  const location = useLocation();
  const navigate = useNavigate();

  const forwardRootPage = () => {
    navigate("/");
  };

  const { cardType, firstCardNumber } = location.state;
  return (
    <StyledContainer>
      <img src="./images/Check.svg" alt="완료 이미지" />
      <h1>
        {firstCardNumber}로 시작하는 <br /> {cardType}가 등록되었어요.
      </h1>
      <Button onClick={forwardRootPage} text="확인" />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  color: #353c49;
  text-align: center;
`;
