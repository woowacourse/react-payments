import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CompleteCheckIcon from "./components/CompleteCheckIcon/CompleteCheckIcon";
import Button from "../../common/components/Button/Button";

const CardRegisterCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstCardNumberChunk, cardCompany } = location.state;

  return (
    <CardRegisterCompletePageLayout>
      <CompleteCheckIcon />
      <CompleteMessage>
        <span>{firstCardNumberChunk}로 시작하는</span>
        <span>{cardCompany}가 등록되었어요.</span>
      </CompleteMessage>
      <Button size="block" onClick={() => navigate("/register")}>
        확인
      </Button>
    </CardRegisterCompletePageLayout>
  );
};

export default CardRegisterCompletePage;

const CardRegisterCompletePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const CompleteMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #353c49;
  font-size: 25px;
  font-weight: 700;
`;
