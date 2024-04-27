import { useLocation, useNavigate } from "react-router-dom";

import { CardInformationValueState } from "../../../hooks/useCardEnrollForm";
import CompleteImg from "../../../static/Complete.png";
import { cardIssuerMapper } from "../../../constants/cardIssuers";
import styled from "styled-components";

const getDummyData = (): CardInformationValueState => {
  return {
    cardNumbers: ["1234", "0000", "0000", "0000"],
    cardIssuer: "kb-card",
    cardExpiration: { month: "00", year: "00" },
    cardOwnerName: "",
    cardCvc: "",
    cardPassword: "",
  };
};

export default function CardEnrollComplete() {
  const navigate = useNavigate();

  const location = useLocation();

  const cardInformation: CardInformationValueState =
    location.state?.cardInformation || getDummyData();

  return (
    <CardEnrollCompleteWrapper>
      <CompleteContainer>
        <CheckmarkIcon src={CompleteImg} alt="complete-image"></CheckmarkIcon>
        <SuccessMessage>
          <div>{cardInformation.cardNumbers[0]}로 시작하는</div>
          <div>
            {cardInformation.cardIssuer &&
              cardIssuerMapper[cardInformation.cardIssuer].text}
            가 등록되었어요.
          </div>
        </SuccessMessage>
        <GoBackButton onClick={() => navigate("/")}>확인</GoBackButton>
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
