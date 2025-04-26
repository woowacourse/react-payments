import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { CheckIcon } from "../../components/@common/CheckIcon/CheckIcon";
import Button from "../../components/@common/Button/Button";

function SuccessPage() {
  const location = useLocation();
  const cardInfo = location.state.cardInfo;

  return (
    <SuccessContainer>
      <CheckIcon />
      <SuccessMessage>
        {cardInfo.firstNumber}로 시작하는
        <br /> {cardInfo.cardBrand}가 등록되었어요.
      </SuccessMessage>
      <ButtonWrapper>
        <Button>확인</Button>
      </ButtonWrapper>
    </SuccessContainer>
  );
}

export default SuccessPage;

const SuccessContainer = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 15px 0 15px;
  flex-wrap: wrap;
`;

const SuccessMessage = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  margin: 50px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
