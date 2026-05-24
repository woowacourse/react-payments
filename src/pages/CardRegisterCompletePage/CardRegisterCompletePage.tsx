import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckIcon from "../../../public/images/CheckIcon.png";
import BaseButton from "../../shared/components/Button/BaseButton";

const CardRegisterCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstCardNumberChunk, cardCompany } = location.state;

  return (
    <CardRegisterCompletePageLayout>
      <CompleteCheckIcon>
        <img src={CheckIcon} alt="완료 확인 아이콘"></img>
      </CompleteCheckIcon>
      <CompleteMessage>
        <span>{firstCardNumberChunk}로 시작하는</span>
        <span>{cardCompany}가 등록되었어요.</span>
      </CompleteMessage>
      <BaseButton style="rounded" onClick={() => navigate("/register")}>
        확인
      </BaseButton>
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

const CompleteCheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: #333333;
`;
