import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/@common";
import Button from "../../components/@common/Button/Button";
import ROUTE_PATH from "../../constants/routePath";
import FlexBox from "../../components/@common/FlexBox";

const NotFoundPage = () => {
  return (
    <Container justify="center">
      <RecommendMessage>
        유효하지 않은 경로입니다😲
        <br /> 카드를 추가해 볼까요?
      </RecommendMessage>
      <FlexBox justify="space-around">
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
      </FlexBox>
    </Container>
  );
};

export default NotFoundPage;

const RecommendMessage = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
