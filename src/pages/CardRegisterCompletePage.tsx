import completeCheckImage from "@assets/completeCheckImage.png";
import Button from "@/components/common/Button";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import { useLocation, useNavigate } from "react-router";
import { ROUTE_PATH } from "@/constants/routes";
import PageLayout from "@/components/common/PageLayout";

export type CardRegisterCompletePageState = {
  cardNumberPrefix: string;
  cardCompanyName: string;
};

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { cardNumberPrefix, cardCompanyName } =
    state as CardRegisterCompletePageState;

  return (
    <PageLayout>
      <PageWrapper>
        <CompleteCheckImage src={completeCheckImage} alt="completeCheckImage" />
        <CompleteTitle>
          {cardNumberPrefix}로 시작하는
          <br />
          {cardCompanyName}가 등록되었어요.
        </CompleteTitle>
        <Button onClick={() => navigate(ROUTE_PATH.CARD_REGISTER)}>확인</Button>
      </PageWrapper>
    </PageLayout>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompleteCheckImage = styled.img`
  width: 4.75rem;
  height: 4.75rem;
`;

const CompleteTitle = styled.h1`
  margin: 2.5rem 0;
  text-align: center;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

export default CardRegisterCompletePage;
