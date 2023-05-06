import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../@common";
import Button from "../@common/Button/Button";
import ROUTE_PATH from "../../constants/routePath";

const NotFound = () => {
  return (
    <Container justify="center">
      <RecommendMessage>
        유효하지 않은 경로입니다😲
        <br /> 카드를 추가해 볼까요?
      </RecommendMessage>
      <NavigateButtonContainer>
        <Link to={ROUTE_PATH.root}>
          <Button type="button" bgColor="var(--color-pale)" width="150px">
            홈으로
          </Button>
        </Link>
        <Link to={ROUTE_PATH.addCard}>
          <Button type="button" bgColor="var(--color-primary)" width="150px">
            카드 추가하기
          </Button>
        </Link>
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
