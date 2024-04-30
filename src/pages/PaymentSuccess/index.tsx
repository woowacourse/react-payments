import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import SUCCESS from "/public/img/Success.png";

interface PaymentsSuccessProps {
  cardNumber: string;
  cardName: string;
}

const PaymentsSuccess = () => {
  const location = useLocation();
  const { cardNumber, cardName } = location.state as PaymentsSuccessProps;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <SuccessContainer>
      <SuccessImg src={SUCCESS} alt="등록완료 이미지" />
      <MessageContainer>
        <TextWrapper>{cardNumber}로 시작하는</TextWrapper>
        <TextWrapper> {cardName}가 등록되었어요.</TextWrapper>
      </MessageContainer>
      <Button content="확인" onClick={handleClick} width="320px" />
    </SuccessContainer>
  );
};

export default PaymentsSuccess;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 25px;
`;

const SuccessImg = styled.img`
  width: 76px;
  height: 76px;
  top: 188px;
  left: 150px;
`;

const MessageContainer = styled.p`
  width: 338px;
  height: 100px;
  top: 289px;
  left: 19px;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.span`
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
  color: rgba(53, 60, 73, 1);
`;
