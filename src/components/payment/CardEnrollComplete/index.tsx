import CompleteImg from "../../../static/Complete.png";
import styled from "styled-components";

export default function CardEnrollComplete() {
  return (
    <CardEnrollCompleteWrapper>
      <CompleteContainer>
        <CheckmarkIcon src={CompleteImg} alt="complete-image"></CheckmarkIcon>
        <SuccessMessage>
          <div>5511로 시작하는</div>
          <div>BC카드가 등록되었어요.</div>
        </SuccessMessage>
        <GoBackButton>확인</GoBackButton>
      </CompleteContainer>
    </CardEnrollCompleteWrapper>
  );
}

const CardEnrollCompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompleteContainer = styled.div`
  width: 376px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const CheckmarkIcon = styled.img`
  width: 76px;
  height: 76px;
`;

const SuccessMessage = styled.h1`
  width: 338px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
  color: rgba(53, 60, 73, 1);
`;

const GoBackButton = styled.button`
  width: 320px;
  height: 44px;
  background-color: rgba(51, 51, 51, 1);
  border-radius: 5px;
  border: 0;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;
