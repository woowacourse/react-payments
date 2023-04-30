import styled, { CSSProperties } from "styled-components";
import { Container } from "../common";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "../../constants/routePath";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(ROUTE_PATH.root);
  const goAddCard = () => navigate(ROUTE_PATH.addCard);

  return (
    <Container justify="center">
      <RecommendMessage>
        유효하지 않은 경로입니다😲
        <br /> 카드를 추가해 볼까요?
      </RecommendMessage>
      <NavigateButtonContainer>
        <NavigateButton type="button" onClick={goHome} $backgroundColor="#ececec">
          홈으로
        </NavigateButton>
        <NavigateButton type="button" onClick={goAddCard} $backgroundColor="#d4e7fd">
          카드 추가하기
        </NavigateButton>
      </NavigateButtonContainer>
    </Container>
  );
};

export default NotFound;

const RecommendMessage = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const NavigateButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const NavigateButton = styled.button<{ $backgroundColor: CSSProperties["backgroundColor"] }>`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => props.$backgroundColor};

  cursor: pointer;
`;
